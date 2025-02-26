#!/bin/bash
set -e

SRC_DIR="models/glb"
DEST_DIR="models/gltfjsx"

echo "🔄 Checking GLB files for conversion (parallel)..."

find "$SRC_DIR" -type f -name "*.glb" -print0 | xargs -0 -P $(nproc) -I {} bash -c '
  glb_file="{}";
  folder=$(dirname "${glb_file#$SRC_DIR/}");
  filename=$(basename -- "$glb_file");
  modelname="${filename%.glb}";
  jsx_file="$DEST_DIR/$folder/$modelname.jsx";

  if [[ -f "$jsx_file" && $(stat -c %Y "$jsx_file") -ge $(stat -c %Y "$glb_file") ]]; then
    exit 0;
  fi;

  mkdir -p "$DEST_DIR/$folder";
  gltfjsx "$glb_file" -o "$jsx_file";
'

echo "✅ Conversion completed!"
