import ImageCard from "./ImageCard";
import images from "../data/images";

function Gallery() {
  // Duplicate the images to create a seamless infinite scroll
  const scrollingImages = [...images, ...images];

  return (
    <section className="gallery-wrapper">
      <div className="gallery-track">
        {scrollingImages.map((image, index) => (
          <ImageCard
            key={`${image.id}-${index}`}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;