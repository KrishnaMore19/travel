import Package1 from '../../assets/images/packege-1.jpg';
import Package2 from '../../assets/images/packege-2.jpg';
import Package3 from '../../assets/images/packege-3.jpg';

function PackageSection() {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Explore Our Best Travel Packages</h2>
        <p className="section-text">
          Whether you're dreaming of a relaxing beach getaway, an adventurous river expedition, 
          or a charming island retreat, we have the perfect package for you. Embark on unforgettable journeys at unbeatable prices.
        </p>

        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={Package1} alt="Experience The Great Holiday On Beach" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Luxury Beach Escape in Goa</h3>
                <p className="card-text">
                  Relax on pristine beaches, indulge in fresh seafood, and enjoy thrilling water sports. 
                  A perfect blend of tranquility and adventure awaits you in Goa!
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">Max: 10 People</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Goa, India</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">₹62,000 <span>/ per person</span></p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={Package2} alt="Summer Holiday To The Oxolotan River" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Adventure at Rishikesh River</h3>
                <p className="card-text">
                  Experience the thrill of white-water rafting, serene camping by the river, and yoga in the Himalayan foothills. 
                  A perfect retreat for nature lovers and thrill-seekers.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">5D/4N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">Max: 12 People</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Rishikesh, India</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(20 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half"></ion-icon>
                  </div>
                </div>
                <p className="price">₹43,000 <span>/ per person</span></p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src={Package3} alt="Santorini Island's Weekend Vacation" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Exotic Retreat in Andaman Islands</h3>
                <p className="card-text">
                  Crystal-clear waters, lush greenery, and mesmerizing sunsets make Andaman the ideal paradise. 
                  Snorkel, scuba dive, and explore the untouched beauty of these islands.
                </p>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">6D/5N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">Max: 8 People</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Andaman, India</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(40 reviews)</p>
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <p className="price">₹55,000 <span>/ per person</span></p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
}

export default PackageSection;
