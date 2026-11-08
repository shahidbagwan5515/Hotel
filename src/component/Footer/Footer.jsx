import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaUtensils,
  FaChevronDown,
} from "react-icons/fa";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="restaurant-footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div>
          <span>STAY CONNECTED</span>
          <h2>Get Delicious Offers in Your Inbox!</h2>
          <p>Subscribe for special deals, discounts and latest updates.</p>
        </div>

        <form className="footer-subscribe" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">
            Subscribe <FaArrowRight />
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span>
              <FaUtensils />
            </span>
            <div>
              <h2>
                ROYAL <b>ZAAYKA</b>
              </h2>
              <small>BIRYANI & CHICKEN HOUSE</small>
            </div>
          </div>

          <p>
            Experience the authentic taste of Indian biryani and delicious
            chicken dishes. Fresh ingredients, royal spices and unforgettable
            flavours.
          </p>

          <div className="footer-social">
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div
          className={`footer-column ${openSection === "quick" ? "footer-open" : ""}`}
        >
          <button
            className="footer-accordion-title"
            onClick={() => toggleSection("quick")}
            aria-expanded={openSection === "quick"}
          >
            <span>Quick Links</span>
            <FaChevronDown className="footer-chevron" />
          </button>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Our Menu</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/offers">Special Offers</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Our Menu */}
        <div
          className={`footer-column ${openSection === "menu" ? "footer-open" : ""}`}
        >
          <button
            className="footer-accordion-title"
            onClick={() => toggleSection("menu")}
            aria-expanded={openSection === "menu"}
          >
            <span>Our Menu</span>
            <FaChevronDown className="footer-chevron" />
          </button>

          <ul>
            <li>
              <a href="/menu">Chicken Biryani</a>
            </li>
            <li>
              <a href="/menu">Hyderabadi Biryani</a>
            </li>
            <li>
              <a href="/menu">Chicken Tikka</a>
            </li>
            <li>
              <a href="/menu">Chicken Kebab</a>
            </li>
            <li>
              <a href="/menu">Special Combos</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div
          className={`footer-column footer-contact ${openSection === "contact" ? "footer-open" : ""}`}
        >
          <button
            className="footer-accordion-title"
            onClick={() => toggleSection("contact")}
            aria-expanded={openSection === "contact"}
          >
            <span>Contact Us</span>
            <FaChevronDown className="footer-chevron" />
          </button>

          <div className="footer-contact-details">
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <p>Your Restaurant Address, City, India</p>
            </div>

            <div className="footer-contact-item">
              <FaPhoneAlt />
              <p>+91 98765 43210</p>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope />
              <p>info@royalbiryani.com</p>
            </div>

            <div className="footer-contact-item">
              <FaClock />
              <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Royal Biryani. All Rights Reserved.</p>

        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>

        <p>Made with ❤️ for Food Lovers</p>
      </div>
    </footer>
  );
}

export default Footer;
