import {
  FaUtensils,
  FaAward,
  FaHeart,
  FaLeaf,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaStar,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./About.css";

function About() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      text: "We use fresh vegetables, quality chicken and authentic ingredients.",
    },
    {
      icon: <FaUtensils />,
      title: "Authentic Taste",
      text: "Traditional recipes and aromatic spices create our unique flavour.",
    },
    {
      icon: <FaHeart />,
      title: "Made With Love",
      text: "Every dish is prepared with care, passion and attention to detail.",
    },
    {
      icon: <FaAward />,
      title: "Quality Service",
      text: "We focus on quality food and a memorable dining experience.",
    },
  ];

  const stats = [
    { icon: <FaUsers />, number: "5K+", label: "Happy Customers" },
    { icon: <FaUtensils />, number: "30+", label: "Delicious Dishes" },
    { icon: <FaAward />, number: "5+", label: "Years Experience" },
    { icon: <FaStar />, number: "4.9", label: "Customer Rating" },
  ];

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-subtitle">
            <FaUtensils /> ABOUT ROYAL BIRYANI
          </span>

          <h1>
            Our Story
            <span> Our Passion</span>
          </h1>

          <p>
            Bringing authentic flavours, delicious biryani and unforgettable
            food experiences to every table.
          </p>

          <a href="#about-story" className="about-btn">
            Discover Our Story <FaArrowRight />
          </a>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about-story" id="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900"
            alt="Delicious restaurant food"
          />

          <div className="about-experience-box">
            <strong>5+</strong>
            <span>Years of Taste & Quality</span>
          </div>
        </div>

        <div className="about-story-content">
          <span className="about-small-title">OUR STORY</span>

          <h2>
            A Passion For
            <span> Great Food</span>
          </h2>

          <p>
            Welcome to Royal Biryani, where great food brings people together.
            We believe every meal should be a special experience filled with
            flavour, freshness and happiness.
          </p>

          <p>
            Our journey started with a simple passion for authentic biryani and
            traditional Indian cuisine. We carefully prepare every dish using
            quality ingredients and aromatic spices.
          </p>

          <div className="about-check-list">
            <div>
              <FaCheckCircle />
              Fresh and quality ingredients
            </div>

            <div>
              <FaCheckCircle />
              Authentic Indian recipes
            </div>

            <div>
              <FaCheckCircle />
              Delicious food and friendly service
            </div>
          </div>

          <a href="/menu" className="about-btn">
            Explore Our Menu <FaArrowRight />
          </a>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="about-stats">
        {stats.map((item, index) => (
          <div className="about-stat-card" key={index}>
            <div className="about-stat-icon">{item.icon}</div>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="about-section-heading">
          <span className="about-small-title">WHY CHOOSE US</span>

          <h2>
            What Makes Us
            <span> Special?</span>
          </h2>

          <p>
            We bring together quality ingredients, authentic flavours and
            excellent hospitality.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature, index) => (
            <div className="about-feature-card" key={index}>
              <div className="about-feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="about-chef">
        <div className="about-chef-content">
          <span className="about-small-title">OUR KITCHEN</span>

          <h2>
            Crafted With
            <span> Passion & Care</span>
          </h2>

          <p>
            Behind every delicious dish is a team that loves cooking. Our
            kitchen focuses on freshness, flavour and consistency to make every
            meal memorable.
          </p>

          <div className="about-chef-points">
            <div>
              <FaCheckCircle />
              Carefully selected ingredients
            </div>

            <div>
              <FaCheckCircle />
              Traditional cooking methods
            </div>

            <div>
              <FaCheckCircle />
              Consistent food quality
            </div>
          </div>
        </div>

        <div className="about-chef-image">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900"
            alt="Chef preparing food"
          />
        </div>
      </section>

      {/* OPENING HOURS */}
      <section className="about-hours">
        <div className="about-hours-icon">
          <FaClock />
        </div>

        <div className="about-hours-content">
          <span className="about-small-title">VISIT US</span>
          <h2>We Are Ready To Serve You!</h2>
          <p>Enjoy delicious food and a warm dining experience with us.</p>
        </div>

        <div className="about-hours-time">
          <strong>Opening Hours</strong>
          <span>Monday - Sunday</span>
          <h3>11:00 AM - 11:00 PM</h3>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <div className="about-cta-content">
          <span>HUNGRY? LET'S EAT!</span>

          <h2>
            Great Food.
            <br />
            Great Moments.
          </h2>

          <p>
            Experience the authentic taste of Royal Biryani. Order your
            favourite dish today!
          </p>

          <div className="about-cta-buttons">
            <a href="/menu" className="about-btn">
              View Our Menu <FaArrowRight />
            </a>

            <a href="/contact" className="about-contact-btn">
              <FaPhoneAlt /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
