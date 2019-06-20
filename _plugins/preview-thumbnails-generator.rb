begin
  require 'rmagick'
  include Magick
rescue LoadError
end

module Jekyll
  class PreviewThumbnailsGenerator < Generator

    def generate(site)
      if site.config["generate-thumbnails"]["enabled"]
        begin
          mod = Magick.const_get "Version"
        rescue NameError
          Jekyll.logger.error "Preview Thumbnails:", "RMagick gem isn't installed"
          raise "RMagick gem missing"
        end

        Jekyll.logger.info "Preview Thumbnails:", "Generating thumbnails..."

        count = 0
        config_width = site.config["generate-thumbnails"]["width"]
        config_height = site.config["generate-thumbnails"]["height"]

        site.posts.docs.each do |post|
          if post.data["image"] and post.data["image"]["feature"]
            original_path = post.data["image"]["feature"]

            extension = File.extname(original_path)
            image_path_stripped = File.join(File.dirname(original_path), File.basename(original_path, extension))
            original_2x_path = "#{image_path_stripped}@2x#{extension}"
            if File.exists? original_2x_path
              original_path = original_2x_path 
            end

            thumb_path = "#{File.join(site.config["generate-thumbnails"]["path"], File.basename(original_path))}"

            image = Image.read(original_path)[0]
            # this is the same logic we use for the .auto-thumbnail class in CSS
            image.resize_to_fill!(config_width * 2, config_height * 2, NorthWestGravity) 
            image.crop!(image.columns * 0.4, image.rows * 0.1, config_width, config_height)

            if image.columns < config_width || image.rows < config_height
              Jekyll.logger.warn "Preview Thumbnails:", "Image not large enough (h:#{image.rows} w: #{image.columns}) #{thumb_path}"
            end

            image.write thumb_path
            count += 1
          end
        end
        Jekyll.logger.info "Preview Thumbnails:", "Done. Created #{count} thumbnails."
      else
        Jekyll.logger.info "Preview Thumbnails:", "Disabled in site config"
      end
    end

  end
end