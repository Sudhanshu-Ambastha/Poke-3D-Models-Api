#!/bin/bash
set -e

# Define the error log file
ERROR_LOG="models/error.txt"
FINAL_ERROR_LOG="models/final_errors.txt"

# Ensure logs directory exists
mkdir -p logs

# Check if the error log exists and is non-empty
if [ -s "$ERROR_LOG" ]; then
  echo "😞Conversion errors were detected:"
  cat "$ERROR_LOG"
  echo "📄Saving errors to $FINAL_ERROR_LOG"
  cp "$ERROR_LOG" "$FINAL_ERROR_LOG"
else
  echo "❌No conversion errors detected."
  # Optionally remove the error log if empty
  rm -f "$ERROR_LOG"
fi
