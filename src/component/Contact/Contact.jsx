import React, { useState } from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            We'd love to hear from you. Get in touch with Royal Biryani for
            reservations, orders, or any questions.
          </p>

          <div className="contact-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-heading">
            <span>CONTACT INFORMATION</span>
            <h2>
              We Are Always <strong>Here For You</strong>
            </h2>
            <p>
              Have a question or want to make a reservation? Reach out to us
              anytime.
            </p>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>Bhusawal Maharashtra, India - 425201</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions →
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <h3>Phone Number</h3>
              <p>+91 98765 43210</p>
              <a href="tel:+919876543210">Call Us →</a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email Address</h3>
              <p>info@royalbiryani.com</p>
              <a href="mailto:info@royalbiryani.com">Send Email →</a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Opening Hours</h3>
              <p>Monday - Sunday</p>
              <strong>11:00 AM - 11:00 PM</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-container contact-form-layout">
          <div className="contact-form-info">
            <span className="contact-subtitle">SEND US A MESSAGE</span>
            <h2>
              Let's Start a <strong>Conversation</strong>
            </h2>

            <p>
              Whether you have feedback, a special request, or want to plan an
              event, our team is ready to help.
            </p>

            <div className="contact-promise">
              <FaCheckCircle />
              <span>Quick response from our team</span>
            </div>

            <div className="contact-promise">
              <FaCheckCircle />
              <span>Friendly customer support</span>
            </div>

            <div className="contact-promise">
              <FaCheckCircle />
              <span>Fresh food, happy moments</span>
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="contact-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <h3>Send Your Message</h3>
            <p>Fill out the form below and we'll get back to you.</p>

            {submitted && (
              <div className="contact-success">
                <FaCheckCircle />
                Message submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact-input-row">
                <div className="contact-input-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-input-row">
                <div className="contact-input-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-input-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-input-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-heading">
            <span>FIND US</span>
            <h2>
              Visit Our <strong>Restaurant</strong>
            </h2>
          </div>

          <div className="contact-map">
            <iframe
              title="Royal Biryani Location - Bhusawal"
              src="https://www.google.com/maps?q=Bhusawal,Jalgaon,Maharashtra,India&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
