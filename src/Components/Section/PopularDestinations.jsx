import Popular1 from '../../assets/images/popular-1.jpg';
import Popular2 from '../../assets/images/popular-2.jpg';
import Popular3 from '../../assets/images/popular-3.jpg';

function PopularDestinations() {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Discover Stunning Locations</p>
        <h2 className="h2 section-title">Popular Destinations</h2>
        <p className="section-text">
          Explore breathtaking destinations around the world, from vibrant cityscapes to serene natural wonders. 
          Whether you're looking for adventure, relaxation, or cultural immersion, we've got the perfect spot for you.
        </p>

        <ul className="popular-list">
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={Popular1} alt="San Miguel, Italy" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  {[...Array(5)].map((_, i) => (
                    <ion-icon key={i} name="star"></ion-icon>
                  ))}
                </div>
                <p className="card-subtitle"><a href="#">Italy</a></p>
                <h3 className="h3 card-title"><a href="#">San Miguel</a></h3>
                <p className="card-text">
                  A charming Italian town with cobbled streets, stunning architecture, and exquisite cuisine. 
                  Perfect for a romantic getaway or a cultural escape.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={Popular2} alt="Burj Khalifa, Dubai" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  {[...Array(5)].map((_, i) => (
                    <ion-icon key={i} name="star"></ion-icon>
                  ))}
                </div>
                <p className="card-subtitle"><a href="#">Dubai</a></p>
                <h3 className="h3 card-title"><a href="#">Burj Khalifa</a></h3>
                <p className="card-text">
                  The world's tallest skyscraper offers breathtaking panoramic views of Dubai's skyline. 
                  Experience luxury shopping, fine dining, and desert adventures all in one place.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={Popular3} alt="Kyoto Temple, Japan" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  {[...Array(5)].map((_, i) => (
                    <ion-icon key={i} name="star"></ion-icon>
                  ))}
                </div>
                <p className="card-subtitle"><a href="#">Japan</a></p>
                <h3 className="h3 card-title"><a href="#">Kyoto Temple</a></h3>
                <p className="card-text">
                  Step into the heart of Japan’s cultural heritage. Kyoto’s ancient temples, breathtaking gardens, 
                  and vibrant traditions offer a truly enchanting experience.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary">Explore More Destinations</button>
      </div>
    </section>
  );
}

export default PopularDestinations;
