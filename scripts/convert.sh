#!/bin/bash

SRC_DIR="models/glb"
DEST_DIR="models/gltfjsx"

echo "🔄 Checking GLB files for conversion..."

find "$SRC_DIR" -type f -name "*.glb" | while read -r glb_file; do
  # Extract folder and filename
  folder=$(dirname "${glb_file#$SRC_DIR/}")  # Get folder inside models/glb
  filename=$(basename -- "$glb_file")
  modelname="${filename%.glb}"
  jsx_file="$DEST_DIR/$folder/$modelname.jsx"

  # Check if JSX file exists and is up to date
  if [[ -f "$jsx_file" && $(stat -c %Y "$jsx_file") -ge $(stat -c %Y "$glb_file") ]]; then
    continue  # Skip if JSX file exists and is newer or same as GLB
  fi

  # Create directory if not exists
  mkdir -p "$DEST_DIR/$folder"

  # Process the GLB file
  npx gltfjsx@6.5.3 "$glb_file" -o "$jsx_file"
done

echo "✅ Conversion completed!"