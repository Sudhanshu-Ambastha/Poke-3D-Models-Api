#!/bin/bash

REPO_NAME=$1
BRANCH=$2
BASE_URL="https://raw.githubusercontent.com/$REPO_NAME/$BRANCH/models/glb"

echo "🔄 Processing JSX file updates..."

find models/gltfjsx -type f -name "*.jsx" -print0 | while IFS= read -r -d $'\0' jsx_file; do
  folder=$(dirname "${jsx_file#models/gltfjsx/}")
  modelname=$(basename -- "$jsx_file" .jsx)
  NEW_PATH="$BASE_URL/$folder/$modelname.glb"

  # Update useGLTF if needed
  if ! grep -q "useGLTF('$NEW_PATH')" "$jsx_file"; then
    sed -i -E "s|useGLTF\('https://raw.githubusercontent.com.*/models/glb/.*.glb'\)|useGLTF('$NEW_PATH')|g" "$jsx_file"
  fi

  # Update useGLTF.preload if needed
  if ! grep -q "useGLTF.preload('$NEW_PATH')" "$jsx_file"; then
    sed -i -E "s|useGLTF.preload\('https://raw.githubusercontent.com.*/models/glb/.*.glb'\)|useGLTF.preload('$NEW_PATH')|g" "$jsx_file"
  fi
done

echo "✅ JSX file updates completed!"
