source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.8.5"
gem "fastimage"

group :jekyll_plugins do
  gem 'jekyll-vibrantjs', '~> 1.0'
  gem 'jekyll-twoxify', '~> 1.0.1'
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
