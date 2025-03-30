import Gallery1 from "../../assets/images/gallery-1.jpg";
import Gallery2 from "../../assets/images/gallery-2.jpg";
import Gallery3 from "../../assets/images/gallery-3.jpg";
import Gallery4 from "../../assets/images/gallery-4.jpg";
import Gallery5 from "../../assets/images/gallery-5.jpg";

const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

function GallerySection() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle text-white">Photo Gallery</p>
        <h2 className="h2 section-title text-white">Memories From Our Travellers</h2>
        <p className="section-text text-white">
          Explore breathtaking moments captured by fellow travelers. Let these stunning photos inspire your next adventure!
        </p>

        <ul className="gallery-list">
          {galleryImages.map((image, index) => (
            <li className="gallery-item" key={index}>
              <figure className="gallery-image">
                <img src={image} alt={`Travel snapshot ${index + 1}`} loading="lazy" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
