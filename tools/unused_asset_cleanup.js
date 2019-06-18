#!/usr/bin/env node

const ASSET_PATH = '../assets/img/lol/',
      POSTS_PATH = '../_posts/',
      IMAGE_KEYS = ['feature', 'headliner', 'thumbnail'];

const fs = require('fs'),
      nodePath = require('path'),
      yaml = require('yaml-front-matter');

const pathTo2x = (path) => {
  const extension = nodePath.extname(path);
  return path.replace(extension, `@2x${extension}`);
}

// read all md files in _posts/, populate an array with any image file paths
// found in frontmatter keys: image[feature], image[headliner], image[thumbnail]
// as well as any images in the content body itself

let images = [];
const posts = fs.readdirSync(POSTS_PATH);

for(let postFile of posts){
  if(postFile.endsWith('.md')){
    let fileContents = fs.readFileSync(`${POSTS_PATH}${postFile}`, 'utf8'),
        fm = yaml.safeLoadFront(fileContents);

    if(fm.image){
      for(let key in fm.image){
        if(IMAGE_KEYS.includes(key)){
          images.push(fm.image[key]);
        }
      }
    }

    if(fm.__content){
      const markdownImages = fm.__content.match(/(?:!\[(.*?)\]\((.*?)\))/g);
      if(markdownImages){
        for(let img of markdownImages){
          const contentUrl = img.match(/(\/.+?)[\ |\)]/)[1];
          if(contentUrl && !contentUrl.startsWith('//')){
            images.push(contentUrl.substring(1));
          }
        }
      }

      const srcExp = RegExp('src\s*=\s*"(.+?)"', 'g');
      let matches = [],
          imgUrls = [];
      while((matches = srcExp.exec(fm.__content)) !== null){
        imgUrls.push(matches[1]);
      }
      
      if(imgUrls){
        for(let img of imgUrls){
          if(img && !(img.startsWith('//') || img.startsWith('http'))){
            images.push(img.substring(1));
          }
        }
      }
    }
  }
}

const staticImagesList = Array.from(images);
for(file of staticImagesList){
  images.push(pathTo2x(file));
}

fs.readdir(ASSET_PATH, (err, files) => {
  let badFiles = [];

  if(err){
    console.error(err);
  }else{
    for(let assetFile of files){
      if(!assetFile.startsWith('.')){
        const assetPath = `${ASSET_PATH.replace('../', '')}${assetFile}`;
        if(!images.includes(assetPath)){
          badFiles.push(assetFile);
        }
      }
    }

    for(let badFile of badFiles){
      const badPath = `${ASSET_PATH}${badFile}`;
      fs.unlink(badPath, (err) => {
        if(err){
          console.error(err);
        }else{
          console.log(badPath);
        }
      })
    }
  }
});

