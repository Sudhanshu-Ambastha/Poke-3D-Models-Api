#!/bin/bash

SRC_DIR="models/glb"
DEST_DIR="models/gltfjsx"

echo "🔄Converting GLB files from: $SRC_DIR"
echo "✅Saving JSX files to: $DEST_DIR"

for glb_file in $(find $SRC_DIR -type f -name "*.glb"); do
  # Extract folder and filename
  folder=$(dirname "${glb_file#$SRC_DIR/}") # Get folder inside models/glb
  filename=$(basename -- "$glb_file")
  modelname="${filename%.glb}"

  echo "🔄Processing: $glb_file"
  echo "✅Expected output path: $DEST_DIR/$folder/$modelname.jsx"

  mkdir -p "$DEST_DIR/$folder"
  npx gltfjsx@6.5.3 "$glb_file" -o "$DEST_DIR/$folder/$modelname.jsx"
done
