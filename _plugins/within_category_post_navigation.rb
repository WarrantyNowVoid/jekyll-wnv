# Thanks to https://ajclarkson.co.uk/blog/jekyll-category-post-navigation/
# I'd rather do all plugins in gems but I don't want to publish someone else's work

module Jekyll
  class WithinCategoryPostNavigation < Generator
    def generate(site)
      site.categories.each_pair do |category, posts|
        posts.sort! { |a,b| b <=> a}
        posts.each do |post|
          index = posts.index post
          next_in_category = nil
          previous_in_category = nil
          if index
            if index < posts.length - 1
              previous_in_category = posts[index + 1]
            end
          	if index > 0
              next_in_category = posts[index - 1]
            end
          end
          post.data["next_in_category"] = next_in_category unless next_in_category.nil?
          post.data["previous_in_category"] = previous_in_category unless previous_in_category.nil?

          post.data["last_in_category"] = posts.first
          post.data["first_in_category"] = posts.last
        end
      end
    end
  end
end