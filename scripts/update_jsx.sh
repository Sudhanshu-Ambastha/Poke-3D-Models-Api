#!/bin/bash

REPO_NAME=$1
BRANCH=$2
BASE_URL="https://raw.githubusercontent.com/$REPO_NAME/$BRANCH/models/glb"

echo "🔄 Processing..."

# Find all .jsx files that do NOT already have the correct path
find models/gltfjsx -type f -name "*.jsx" | while read -r jsx_file; do
  folder=$(dirname "${jsx_file#models/gltfjsx/}") # Extract folder inside models/gltfjsx
  modelname=$(basename -- "$jsx_file" .jsx)
  NEW_PATH="$BASE_URL/$folder/$modelname.glb"

  # If file already has correct paths, skip it
  if grep -q "useGLTF('$NEW_PATH')" "$jsx_file" && grep -q "useGLTF.preload('$NEW_PATH')" "$jsx_file"; then
    continue
  fi

  # Only update files that need fixing
  sed -i -E "s|useGLTF\('https://raw.githubusercontent.com.*/models/glb/.*.glb'\)|useGLTF('$NEW_PATH')|g" "$jsx_file"
  sed -i -E "s|useGLTF.preload\('https://raw.githubusercontent.com.*/models/glb/.*.glb'\)|useGLTF.preload('$NEW_PATH')|g" "$jsx_file"
done

echo "✅ Done!"
