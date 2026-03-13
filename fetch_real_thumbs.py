#!/usr/bin/env python3
"""Download real teaser images from arxiv papers via ar5iv.org"""

import urllib.request
import re
import os
import time

THUMB_DIR = "data/thumbnails"
HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}

PAPERS = [
    ("2601.13422", "trustenergy.png"),
    ("2512.13727", "rast_moe.png"),
    ("2512.03454", "think_drive.png"),
    ("2511.18539", "timepre.png"),
    ("2510.18428", "alphaopt.png"),
    ("2510.04186", "uam_framework.png"),
    ("2505.24260", "genai_urban.png"),
    ("2505.24260", "humanform.png"),   # same paper, same group
]


def fetch_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.read()
    except Exception as e:
        print(f"    Error fetching {url}: {e}")
        return None


def get_all_figures(arxiv_id):
    """Get all figure URLs from ar5iv HTML page"""
    url = f"https://ar5iv.org/abs/{arxiv_id}"
    data = fetch_url(url)
    if not data:
        return []
    html = data.decode("utf-8", errors="ignore")
    imgs = re.findall(r'src="(/html/[^"]+/assets/x\d+\.[a-z]+)"', html, re.I)
    return [f"https://ar5iv.org{p}" for p in imgs]


def download_img(url, out_path):
    data = fetch_url(url)
    if not data or len(data) < 3000:
        return False
    with open(out_path, "wb") as f:
        f.write(data)
    print(f"    Saved {os.path.basename(out_path)}: {len(data)//1024}KB")
    return True


def best_figure(arxiv_id, out_file):
    """Try to pick a good teaser figure - usually x1 or x2"""
    out_path = os.path.join(THUMB_DIR, out_file)
    figs = get_all_figures(arxiv_id)
    
    if not figs:
        print(f"  No figures found for {arxiv_id}")
        return False
    
    print(f"  Found {len(figs)} figures: {[f.split('/')[-1] for f in figs[:5]]}")
    
    # Try figures in order - usually x1 is overview/teaser, try first 3
    for fig_url in figs[:3]:
        print(f"  Trying {fig_url.split('/')[-1]}...")
        if download_img(fig_url, out_path):
            return True
    
    return False


for arxiv_id, out_file in PAPERS:
    print(f"\n[{arxiv_id}] -> {out_file}")
    success = best_figure(arxiv_id, out_file)
    if not success:
        print(f"  FAILED for {arxiv_id}")
    time.sleep(0.5)  # Be polite

# Foundation model - no direct arxiv, search for it
print("\n[foundation_st] - searching...")
# Try known IDs for "Towards Foundation Model for Spatiotemporal Data Analysis" by Wu, Chen, Zhuang
for test_id in ["2411.04096", "2501.05613", "2410.05613"]:
    figs = get_all_figures(test_id)
    if figs:
        print(f"  Found at {test_id}!")
        download_img(figs[0], os.path.join(THUMB_DIR, "foundation_st.png"))
        break
else:
    print("  Not found, keeping existing placeholder")

print("\nDone!")
