# This is so simple and specific and janky I guess why not just do it here

module Jekyll
  class FeaturedPosts < Generator
    def generate(site)
      site.config["featured_posts"] = Array.new(5)
      
      # most recent post overall
      site.config["featured_posts"][0] = site.posts.docs.last

      # random comic
      site.config["featured_posts"][1] = site.categories["Comics"].sample
      # random article
      site.config["featured_posts"][2] = site.categories["Articles"].sample
      # random video
      site.config["featured_posts"][3] = site.categories["Videos"].sample
      # random junk
      site.config["featured_posts"][4] = site.categories["Junk"].sample

    end
  end
end