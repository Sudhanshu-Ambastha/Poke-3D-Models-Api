#!/bin/bash
set -e

# Define paths
MISSING_FILE_LOG="models/missing_files.txt"
ERROR_LOG="models/error.txt"

# Ensure logs directory exists
mkdir -p logs

# Clear any previous error log
> "$ERROR_LOG"

echo "🔄Starting GLB to JSX conversion..."

# Read each GLB file path from the missing files log
while IFS= read -r glb_file; do
  # Skip empty lines or if file states no missing files
  if [ -z "$glb_file" ] || [[ "$glb_file" == "No missing files found" ]]; then
    continue
  fi
  
  # Determine output directory and file
  category=$(basename "$(dirname "$glb_file")")
  model_name=$(basename "$glb_file" .glb)
  output_dir="models/gltfjsx/$category"
  output_file="$output_dir/$model_name.jsx"
  
  # Ensure output directory exists
  mkdir -p "$output_dir"
  
  echo "🔄Converting: $glb_file -> $output_file"
  
  # Run npx gltfjsx conversion command
  if npx gltfjsx "$glb_file" -o "$output_file"; then
    echo "✅Successfully converted: $output_file"
  else
    echo "❌Conversion failed for: $glb_file" | tee -a "$ERROR_LOG"
  fi
done < "$MISSING_FILE_LOG"

# Report conversion results
if [ -s "$ERROR_LOG" ]; then
  echo "❌Some conversions failed. 📄Please check $ERROR_LOG for details."
else
  echo "✅All conversions completed successfully."
fi
