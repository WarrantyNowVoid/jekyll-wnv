#!/bin/bash

for file in assets/img/lol/*; do
    
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"

  if [[ $filename != *"@2x"* ]]; then
    if [ ! -f "assets/img/lol/$filename@2x.$extension" ]; then
      cp -v "assets/img/lol/$filename.$extension" "assets/img/lol/$filename@2x.$extension"
    fi
  fi


done