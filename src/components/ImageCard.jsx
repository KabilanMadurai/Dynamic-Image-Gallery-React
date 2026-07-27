function ImageCard({ image }) {
  return (
    <article className="card">
      <img
        src={image.imageUrl}
        alt={image.title}
        className="card-image"
      />

      <div className="overlay">
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </article>
  );
}

export default ImageCard;