#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Define commit message
COMMIT_MESSAGE="Auto-update: Converted GLB to JSX and handled errors"

# Check for any changes
if [[ -n $(git status --porcelain) ]]; then
  echo "Changes detected, committing and pushing to main branch..."
  
  # Add all changes
  git add .

  # Commit with a message
  git commit -m "$COMMIT_MESSAGE"

  # Push changes to the main branch
  git push origin main
  
  echo "Changes successfully committed and pushed."
else
  echo "No changes to commit."
fi
