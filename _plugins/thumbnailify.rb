module Jekyll
  module Thumbnailify
    class ThumbnailifyTag < Liquid::Tag

      def initialize(tagName, image_arg, tokens)
        super
        @image_arg = image_arg
      end

      def render(context)
        # if we pass in something like "post.image.feature" instead of a path,
        # the variable name gets passed in as a string, so we can look it up in the context
        image_path = "#{context[@image_arg.strip]}"
        image_path[0] = "" if image_path[0] == "/"

        site_url = context["site.url"]

        thumb_path = File.join(context["site.generate-thumbnails.path"], File.basename(image_path))

        "#{site_url}/#{thumb_path}"
      end

      Liquid::Template.register_tag "thumbnailify", self
    end
  end
end