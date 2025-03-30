
import logo from '../assets/images/logo.svg'; 
import GoToTop from './Section/GoToTop';

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="footer-top">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} alt="Tourly logo" className="w-32" />
            </a>
            <p className="footer-text">
              Discover new adventures with us. Your journey to unforgettable experiences starts here!
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h4 className="contact-title font-bold text-lg">Contact Us</h4>
            <p className="contact-text">We’d love to hear from you!</p>
            <ul className="space-y-2">
              <li className="contact-item flex items-center gap-2">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+01123456790" className="contact-link hover:underline">+91 9200640098</a>
              </li>
              <li className="contact-item flex items-center gap-2">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info.tourly.com" className="contact-link hover:underline">info.GlobeTrek.com</a>
              </li>
              <li className="contact-item flex items-center gap-2">
                <ion-icon name="location-outline"></ion-icon>
                <address>3146 Koontz, California</address>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-form">
            <p className="form-text">Subscribe for the latest updates and exclusive offers.</p>
            <form action="" className="form-wrapper flex flex-col gap-3">
              <input 
                type="email" 
                name="email" 
                className="input-field px-4 py-2 rounded-md border border-gray-300 text-black" 
                placeholder="Enter Your Email" 
                required 
              />
              <button type="submit" className="btn btn-secondary w-full">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-gray-800 py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="copyright">
            &copy; 2024 <a href="#" className="hover:underline">Krishna</a>. All rights reserved.
          </p>
          <ul className="footer-bottom-list flex gap-4">
            <li>
              <a href="#" className="footer-bottom-link hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link hover:underline">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <GoToTop /> 
    </footer>
  );
}

export default Footer;
