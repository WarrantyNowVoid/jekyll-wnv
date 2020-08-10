source "https://rubygems.org"

gem "kramdown", ">= 2.3.0"
gem "jekyll", "~> 3.9.0"
gem "fastimage"

group :jekyll_plugins do
  gem 'jekyll-vibrantjs', '~> 1.0'
  gem 'jekyll-twoxify', '~> 1.0.1'
  gem 'kramdown-parser-gfm'
  gem 'jekyll-youtube'
  gem 'jekyll-tagging-related_posts'
  gem 'jekyll-paginate-v2'
  gem 'jekyll-sitemap'
  gem 'jekyll-redirect-from'
end

group :production, optional: true do
  gem 'rmagick'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
