require 'fastimage'

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

        base_path = context["site.generate-thumbnails.path"]
        base_path ||= ''

        thumb_path = File.join(base_path, File.basename(image_path))
        "#{thumb_path}"
      end

      Liquid::Template.register_tag "thumbnailify", self
    end

    class GetHeightTag < Liquid::Tag

      def initialize(tagName, image_arg, tokens)
        super
        @image_arg = image_arg
      end

      def render(context)
        image_path = "#{context[@image_arg.strip]}"
        image_path[0] = "" if image_path[0] == "/"

        width, height = FastImage.size(image_path)
        "#{height}"
      end

      Liquid::Template.register_tag "img_height", self
    end

    class GetWidthTag < Liquid::Tag

      def initialize(tagName, image_arg, tokens)
        super
        @image_arg = image_arg
      end

      def render(context)
        image_path = "#{context[@image_arg.strip]}"
        image_path[0] = "" if image_path[0] == "/"

        width, height = FastImage.size(image_path)
        "#{width}"
      end

      Liquid::Template.register_tag "img_width", self
    end

  end
end