#!/bin/bash
# Fetch real teaser images from arxiv papers

THUMB_DIR="data/thumbnails"
cd "$(dirname "$0")"

fetch_arxiv_img() {
  local arxiv_id="$1"
  local out_file="$2"
  
  echo "Fetching arxiv $arxiv_id -> $out_file"
  
  # Get HTML version and extract first figure image URL
  HTML=$(curl -sL "https://arxiv.org/html/${arxiv_id}" 2>/dev/null)
  if [ -z "$HTML" ]; then
    echo "  Failed to fetch HTML for $arxiv_id"
    return 1
  fi
  
  # Try to find first figure image - look for src with common figure patterns
  IMG_URL=$(echo "$HTML" | grep -oP '(?<=src=")[^"]*\.(png|jpg|jpeg|webp)' | grep -iv "logo\|icon\|avatar\|badge\|button\|arrow" | head -1)
  
  if [ -z "$IMG_URL" ]; then
    # Try broader match
    IMG_URL=$(echo "$HTML" | grep -oP '(?<=src=")[^"]*\.(png|jpg|jpeg)' | head -1)
  fi
  
  if [ -z "$IMG_URL" ]; then
    echo "  No image found in HTML for $arxiv_id"
    return 1
  fi
  
  echo "  Found image: $IMG_URL"
  
  # Build full URL if relative
  if [[ "$IMG_URL" == http* ]]; then
    FULL_URL="$IMG_URL"
  else
    FULL_URL="https://arxiv.org/html/${arxiv_id}/${IMG_URL}"
  fi
  
  # Download
  curl -sL "$FULL_URL" -o "${THUMB_DIR}/${out_file}" 2>/dev/null
  
  # Check if file is valid (>5KB)
  SIZE=$(wc -c < "${THUMB_DIR}/${out_file}" 2>/dev/null || echo 0)
  if [ "$SIZE" -lt 5000 ]; then
    echo "  Downloaded file too small ($SIZE bytes), trying next image..."
    # Try second image
    IMG_URL2=$(echo "$HTML" | grep -oP '(?<=src=")[^"]*\.(png|jpg|jpeg|webp)' | grep -iv "logo\|icon\|avatar\|badge\|button\|arrow" | sed -n '2p')
    if [ -n "$IMG_URL2" ]; then
      if [[ "$IMG_URL2" == http* ]]; then
        FULL_URL2="$IMG_URL2"
      else
        FULL_URL2="https://arxiv.org/html/${arxiv_id}/${IMG_URL2}"
      fi
      curl -sL "$FULL_URL2" -o "${THUMB_DIR}/${out_file}" 2>/dev/null
    fi
  fi
  
  SIZE=$(wc -c < "${THUMB_DIR}/${out_file}" 2>/dev/null || echo 0)
  echo "  Saved: ${out_file} (${SIZE} bytes)"
}

# TrustEnergy
fetch_arxiv_img "2601.13422" "trustenergy.png"

# RAST-MoE-RL
fetch_arxiv_img "2512.13727" "rast_moe.png"

# Think Before You Drive
fetch_arxiv_img "2512.03454" "think_drive.png"

# TimePre
fetch_arxiv_img "2511.18539" "timepre.png"

# AlphaOPT
fetch_arxiv_img "2510.18428" "alphaopt.png"

# UAM Framework
fetch_arxiv_img "2510.04186" "uam_framework.png"

# Generative AI for Urban Design
fetch_arxiv_img "2505.24260" "genai_urban.png"

# Human-guided urban form (same group, use same arxiv)
fetch_arxiv_img "2505.24260" "humanform.png"

# Foundation Model for ST - try SSTD paper or closest arxiv
fetch_arxiv_img "2503.05100" "foundation_st.png"
# If that fails, try searching for it
if [ ! -s "${THUMB_DIR}/foundation_st.png" ]; then
  echo "Trying alternative for foundation_st..."
  fetch_arxiv_img "2502.12345" "foundation_st.png" || true
fi

echo ""
echo "Done! Checking file sizes:"
ls -la "${THUMB_DIR}/trustenergy.png" "${THUMB_DIR}/rast_moe.png" "${THUMB_DIR}/think_drive.png" "${THUMB_DIR}/timepre.png" "${THUMB_DIR}/alphaopt.png" "${THUMB_DIR}/uam_framework.png" "${THUMB_DIR}/genai_urban.png" "${THUMB_DIR}/humanform.png" "${THUMB_DIR}/foundation_st.png" 2>/dev/null
