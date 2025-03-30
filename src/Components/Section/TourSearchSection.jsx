import { useState } from "react";

function TourSearchSection() {
  const [today] = useState(new Date().toISOString().split("T")[0]); // Get today's date for min check-in

  return (
    <section className="tour-search">
      <div className="container">
        <h2 className="h2 section-title text-white">Find Your Perfect Tour</h2>
        <p className="section-text text-white">
          Plan your next adventure with ease. Choose your dream destination, select your dates, 
          and let us handle the rest for a seamless travel experience.
        </p>

        <form action="#" className="tour-search-form">
          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label text-white">Search Destination*</label>
            <input 
              type="text" 
              name="destination" 
              id="destination" 
              required 
              placeholder="e.g., Paris, Maldives, Tokyo" 
              className="input-field text-white" 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="people" className="input-label text-white">Number of Travelers*</label>
            <input 
              type="number" 
              name="people" 
              id="people" 
              required 
              min="1" 
              placeholder="Enter number of travelers" 
              className="input-field text-white" 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkin" className="input-label text-white">Check-in Date*</label>
            <input 
              type="date" 
              name="checkin" 
              id="checkin" 
              required 
              className="input-field text-white" 
              min={today} 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkout" className="input-label text-white">Check-out Date*</label>
            <input 
              type="date" 
              name="checkout" 
              id="checkout" 
              required 
              className="input-field text-white" 
              min={today} 
            />
          </div>

          <button type="submit" className="btn btn-secondary text-white">Inquire Now</button>
        </form>
      </div>
    </section>
  );
}

export default TourSearchSection;
