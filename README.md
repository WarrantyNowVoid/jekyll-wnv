# Warranty Now Void v5

The world is falling apart. Things are getting weird, bad, weirdly bad, and badly weird. We simply couldn't stand by and watch this happen without doing something. And so we brought this website back into existence with the explicit purpose of hurrying that process along. 

## Prerequisites

- node/npm
- ruby/gem
- bundler (`sudo gem install bundler`)

## Config

### Bundler 

Create a directory at the project root named `.bundle` with a file inside named `config` (no extension, no dot), add the vendor prefix settings for bundler:

````
---
BUNDLE_PATH: ".vendor/bundle"
````

This will install all the ruby stuff into a local directory `.vendor/bundle` inside the project instead of trying to install into system ruby and getting messy with permissions.

### jekyll

Edit the `_config.yml` file to your preferred settings, these are likely the ones you'll want to change:

#### host

This will be used to generate all the urls and paths across the site, so if you want anything to work, you'll need to set this to your machine. If you only plan on using it locally, `localhost` or `127.0.0.1` is fine, but if you want it accessible inside your network, you'll need to use a hostname or local IP.

````
host: my-computer.local
````

#### vibrant-posts

This key decides whether to do the color extraction for every post, which is extremely slow (like, adds a full minute to the build time). If you're doing something locally and don't care about the colors, set this to `false`.

## Install

Only one dependency needs to be manually installed:

````
npm install node-vibrant
````

After that, let bundler do it's job:

````
bundle install
````

## Build/Run

Normal Jekyll build process, wrapped in bundler:

Generate the site and exit:

````
bundle exec jekyll b
````

Start a local server with auto-regeneration enabled:

````
bundle exec jekyll s
````

## AWS Amplify Build

Pretty straightforward to run on Amplify, wrap the same commands in their schema:

````yaml
version: 0.1
frontend:
  phases:
    preBuild:
      commands:
        - npm install node-vibrant
        - gem install bundler
        - bundle install
    build:
      commands:
        - bundle exec jekyll b
  artifacts:
    baseDirectory: _site
    files:
      - '**/*'
  cache:
    paths: []
````

## Etc

- `tools/copy2exes.sh`: shell script to generate an identical "@2x" file for every image in the upload asset directory (`/assets/img/lol/`) that doesn't already have one, since the template expects to find an @2x for everything.
- `tools/unused_asset_cleanup.js`: node script to find and remove images in the upload asset dir that aren't referenced by any posts, useful after cleanup. Requires `yaml-front-matter` node module installed.