#!/usr/bin/env python3
"""
MEDIA VOTE — Encodage des visuels de contenu, logos clients, portraits et
vignettes vidéo.

Complète tools/images.js, qui ne traite que les grands visuels de hero.
Ici, les visuels sont affichés en colonne (600 px au plus) : trois largeurs
suffisent. Les rendus détourés (téléphone ou boîtier tenus en main) gardent
leur transparence : ils sont servis en WebP avec couche alpha, et en PNG
réduit à 256 couleurs pour les rares navigateurs sans WebP.

Usage : python3 tools/visuels.py
Requiert Pillow, cwebp et ffmpeg (libsvtav1).
"""

import os
import subprocess
import sys
import tempfile

from PIL import Image, ImageChops

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'assets', 'sources')
OUT = os.path.join(ROOT, 'public', 'assets', 'img')

CONTENT_WIDTHS = [480, 800, 1200]
# Les rendus détourés s'affichent petits (320 px au plus) : inutile de
# servir 1200 px d'une main photographiée, qui pèse lourd même en WebP.
ALPHA_WIDTHS = [360, 640, 960]
VIDEO_WIDTHS = [640, 1280]
PORTRAIT_SIZE = 400
LOGO_BOX = (320, 128)   # affiché à 160 × 64 au plus, doublé pour les écrans denses

WEBP_Q = 78             # les captures portent du texte d'interface : on reste net
AVIF_CRF = 30


def run(args):
    subprocess.run(args, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def kb(path):
    return round(os.path.getsize(path) / 1024, 1)


def has_alpha(im):
    return im.mode in ('RGBA', 'LA') and im.getchannel('A').getextrema()[0] < 255


def save_webp(im, out, q=WEBP_Q, alpha_q=90):
    with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as tmp:
        im.save(tmp.name)
    try:
        run(['cwebp', '-q', str(q), '-alpha_q', str(alpha_q), '-m', '6', '-quiet', tmp.name, '-o', out])
    finally:
        os.unlink(tmp.name)


def save_avif(im, out):
    with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as tmp:
        im.convert('RGB').save(tmp.name)
    try:
        run(['ffmpeg', '-y', '-loglevel', 'error', '-i', tmp.name, '-c:v', 'libsvtav1',
             '-crf', str(AVIF_CRF), '-pix_fmt', 'yuv420p', '-frames:v', '1', '-f', 'avif', out])
    finally:
        os.unlink(tmp.name)


def resized(im, width):
    if im.width <= width:
        return im.copy()
    h = round(im.height * width / im.width)
    return im.resize((width, h), Image.LANCZOS)


def responsive(src, name, widths):
    """Jeu responsive : AVIF + WebP + JPEG, ou WebP + PNG si le visuel est détouré."""
    im = Image.open(src)
    alpha = has_alpha(im.convert('RGBA'))
    im = im.convert('RGBA' if alpha else 'RGB')
    if alpha:
        # Recadrage sur la partie visible : sans lui, un boîtier tenu en main
        # n'occupe qu'un tiers de son cadre et paraît minuscule à l'écran.
        box = im.getchannel('A').point(lambda p: 255 if p > 8 else 0).getbbox()
        if box:
            pad = round(max(box[2] - box[0], box[3] - box[1]) * 0.03)
            box = (max(0, box[0] - pad), max(0, box[1] - pad), min(im.width, box[2] + pad), min(im.height, box[3] + pad))
            im = im.crop(box)
        widths = ALPHA_WIDTHS
    line = []
    for w in widths:
        r = resized(im, w)
        webp = os.path.join(OUT, f'{name}-{w}.webp')
        save_webp(r, webp, q=70 if alpha else WEBP_Q, alpha_q=80)
        if alpha:
            png = os.path.join(OUT, f'{name}-{w}.png')
            r.quantize(256, method=Image.Quantize.FASTOCTREE).save(png, optimize=True)
            line.append(f'{w}: webp {kb(webp)} / png {kb(png)}')
        else:
            avif = os.path.join(OUT, f'{name}-{w}.avif')
            save_avif(r, avif)
            jpg = os.path.join(OUT, f'{name}-{w}.jpg')
            r.save(jpg, quality=74, optimize=True, progressive=True)
            line.append(f'{w}: avif {kb(avif)} / webp {kb(webp)} / jpg {kb(jpg)}')
    print(f'  {name:32} {"détouré" if alpha else "opaque "}  {im.width}×{im.height}')
    for l in line:
        print(f'      {l} Ko')
    top = resized(im, widths[-1])
    return {'name': name, 'alpha': alpha, 'w': top.width, 'h': top.height, 'widths': widths}


def trim(im):
    """Retire les marges blanches ou transparentes autour d'un logo."""
    rgba = im.convert('RGBA')
    bg = Image.new('RGBA', rgba.size, (255, 255, 255, 255))
    flat = Image.alpha_composite(bg, rgba).convert('RGB')
    diff = ImageChops.difference(flat, Image.new('RGB', flat.size, (255, 255, 255)))
    box = diff.point(lambda p: 255 if p > 18 else 0).getbbox()
    return rgba.crop(box) if box else rgba


def logo(src, name):
    im = trim(Image.open(src))
    im.thumbnail(LOGO_BOX, Image.LANCZOS)
    webp = os.path.join(OUT, 'logos', f'{name}.webp')
    save_webp(im, webp, q=88)
    png = os.path.join(OUT, 'logos', f'{name}.png')
    im.quantize(256, method=Image.Quantize.FASTOCTREE).save(png, optimize=True)
    print(f'  {name:32} {im.width}×{im.height}   webp {kb(webp)} Ko')
    return {'name': name, 'w': im.width, 'h': im.height}


def portrait(src, name):
    im = Image.open(src).convert('RGB')
    side = min(im.size)
    im = im.crop(((im.width - side) // 2, 0, (im.width + side) // 2, side))
    im = im.resize((PORTRAIT_SIZE, PORTRAIT_SIZE), Image.LANCZOS)
    webp = os.path.join(OUT, f'equipe-{name}.webp')
    save_webp(im, webp, q=80)
    jpg = os.path.join(OUT, f'equipe-{name}.jpg')
    im.save(jpg, quality=78, optimize=True, progressive=True)
    print(f'  {name:32} {PORTRAIT_SIZE}×{PORTRAIT_SIZE}   webp {kb(webp)} Ko')


def main():
    os.makedirs(os.path.join(OUT, 'logos'), exist_ok=True)

    import json
    visuels = {}
    print('\n\033[1mMEDIA VOTE — visuels de contenu\033[0m\n')
    for f in sorted(os.listdir(os.path.join(SRC, 'contenu'))):
        if f.lower().endswith(('.png', '.jpg', '.jpeg')):
            v = responsive(os.path.join(SRC, 'contenu', f), os.path.splitext(f)[0], CONTENT_WIDTHS)
            visuels[v.pop('name')] = v

    print('\n\033[1mVignettes vidéo\033[0m\n')
    for f in sorted(os.listdir(os.path.join(SRC, 'videos'))):
        if f.lower().endswith('.jpg'):
            v = responsive(os.path.join(SRC, 'videos', f), 'video-' + os.path.splitext(f)[0], VIDEO_WIDTHS)
            visuels[v.pop('name')] = v

    # Dimensions et formats réels, lus par le générateur (src/components/media.js)
    with open(os.path.join(ROOT, 'src', 'data', 'visuels.json'), 'w') as fh:
        json.dump(visuels, fh, indent=2, sort_keys=True)

    print('\n\033[1mPortraits\033[0m\n')
    for f in sorted(os.listdir(os.path.join(SRC, 'equipe'))):
        portrait(os.path.join(SRC, 'equipe', f), os.path.splitext(f)[0])

    print('\n\033[1mLogos clients\033[0m\n')
    dims = {}
    for f in sorted(os.listdir(os.path.join(SRC, 'logos'))):
        name = os.path.splitext(f)[0]
        d = logo(os.path.join(SRC, 'logos', f), name)
        dims[name] = [d['w'], d['h']]

    # Dimensions réelles, lues par le générateur pour poser width/height
    # sur chaque <img> et éviter tout décalage de mise en page.
    with open(os.path.join(ROOT, 'src', 'data', 'logos-dimensions.json'), 'w') as fh:
        json.dump(dims, fh, indent=2, sort_keys=True)
    print(f'\n  {len(dims)} logos · dimensions écrites dans src/data/logos-dimensions.json\n')


if __name__ == '__main__':
    sys.exit(main())
