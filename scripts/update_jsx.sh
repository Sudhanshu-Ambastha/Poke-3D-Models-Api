#!/bin/bash
set -e

# Usage:
#   bash scripts/update_jsx.sh <REPO_SLUG> <BRANCH>
# Example:
#   bash scripts/update_jsx.sh your-org/your-repo main

# Get repository slug and branch from arguments, or set defaults.
REPO_SLUG=${1:-"your-org/your-repo"}
BRANCH=${2:-"main"}

# Construct the GitHub raw base URL
GITHUB_BASE_URL="https://raw.githubusercontent.com/${REPO_SLUG}/${BRANCH}"

echo "⬆Updating JSX files using base URL: ${GITHUB_BASE_URL}"

skipped_count=0
updated_count=0

# Iterate through all JSX files in models/gltfjsx
find models/gltfjsx -type f -name "*.jsx" | while read -r jsx_file; do
  model_name=$(basename "$jsx_file" .jsx)
  
  # Find matching GLB file (assumes unique name)
  glb_file=$(find models/glb -type f -name "$model_name.glb" | head -n 1)
  
  if [ -z "$glb_file" ]; then
    echo "❌ No matching GLB found for $jsx_file, skipping..."
    continue
  fi
  
  # Construct the GitHub URL for the GLB file
  github_glb_url="${GITHUB_BASE_URL}/${glb_file}"
  
  # Check if the file already contains the correct URL.
  if grep -q "$github_glb_url" "$jsx_file"; then
    skipped_count=$((skipped_count + 1))
    continue
  fi
  
  echo "⬆Updating JSX file: $jsx_file"
  echo "🔂Setting GLB URL: $github_glb_url"
  
  # Update useGLTF paths in the JSX file (works with both single and double quotes)
  sed -i "s|useGLTF(['\"][^'\"]*\.glb['\"])|useGLTF('$github_glb_url')|g" "$jsx_file"
  sed -i "s|useGLTF\.preload(['\"][^'\"]*\.glb['\"])|useGLTF.preload('$github_glb_url')|g" "$jsx_file"
  
  # Convert named export "export function Model" to default export "export default function Model"
  if grep -q "export function Model" "$jsx_file"; then
    sed -i 's/export function Model/export default function Model/' "$jsx_file"
  fi
  
  updated_count=$((updated_count + 1))
  echo "⬆Updated: $jsx_file"
done

if [ "$updated_count" -eq 0 ]; then
  echo "❌No changes made. All JSX files were up-to-date."
fi

echo "✅JSX file updates completed. Files updated⬆: $updated_count; Files skipped⏭️: $skipped_count."
