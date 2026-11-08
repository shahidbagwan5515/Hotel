import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaShoppingCart,
  FaSearch,
  FaStar,
  FaArrowRight,
  FaFire,
  FaClock,
  FaMotorcycle,
  FaUtensils,
} from "react-icons/fa";

const dishes = [
  {
    name: "Hyderabadi Chicken Biryani",
    category: "Bestseller",
    price: 249,
    rating: 4.9,
    image: "https://assets.cookdtv.com/t/1080/tv4m09cifrracluhw3g5mrzp04wn",
  },
  {
    name: "Chicken Dum Biryani",
    category: "Chef Special",
    price: 299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=700",
  },
  {
    name: "Chicken Tikka",
    category: "Popular",
    price: 199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700",
  },
  {
    name: "Chicken Kebab",
    category: "Special",
    price: 229,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=700",
  },
];

const categories = [
  "All Items",
  "Biryani",
  "Chicken",
  "Kebabs",
  "Starters",
  "Combos",
];

function Home() {
  return (
    <div className="restaurant-home">
      {/* Hero Section */}
      <section className="restaurant-hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-tag">
            <FaFire /> AUTHENTIC INDIAN FLAVOURS
          </div>

          <h1>
            Taste The Royal
            <span> Biryani Experience</span>
          </h1>

          <p>
            Deliciously cooked dum biryani, juicy chicken and authentic spices.
            Every bite tells a royal story.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="hero-primary-btn">
              Explore Menu <FaArrowRight />
            </a>
            <a href="#offers" className="hero-secondary-btn">
              View Offers
            </a>
          </div>

          <div className="hero-features">
            <div>
              <FaClock />
              <span>30 Min Delivery</span>
            </div>
            <div>
              <FaUtensils />
              <span>Freshly Prepared</span>
            </div>
            <div>
              <FaMotorcycle />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-food-card">
          <img
            src="https://assets.cookdtv.com/t/1080/tv4m09cifrracluhw3g5mrzp04wn"
            alt="Special chicken biryani"
          />
          <div>
            <span>CHEF'S SPECIAL</span>
            <h3>Chicken Dum Biryani</h3>
            <strong>₹299</strong>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="restaurant-categories">
        <div>
          <span className="section-label">EXPLORE OUR MENU</span>
          <h2>What Are You Craving?</h2>
        </div>

        <div className="category-list">
          {categories.map((category, index) => (
            <a
              href="#menu"
              className={
                index === 0 ? "category-item selected" : "category-item"
              }
              key={category}
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {/* Special Dishes */}
      <section className="restaurant-menu" id="menu">
        <div className="menu-heading">
          <div>
            <span className="section-label">OUR SIGNATURE DISHES</span>
            <h2>
              Popular <span>Delicious Food</span>
            </h2>
            <p>Made with love, served with authentic flavours.</p>
          </div>
          <a href="Menu" className="view-all">
            View All <FaArrowRight />
          </a>
        </div>

        <div className="food-grid">
          {dishes.map((dish, index) => (
            <div className="food-card" key={index}>
              <div className="food-image">
                <Link to={`/details/${index}`}>
                  <img src={dish.image} alt={dish.name} />
                </Link>

                <span className="food-badge">{dish.category}</span>

                <Link to={`/details/${index}`} className="food-add-btn">
                  +
                </Link>
              </div>

              <div className="food-info">
                <div className="food-rating">
                  <FaStar /> {dish.rating}
                  <span>• Fresh & Hot</span>
                </div>

                <h3>{dish.name}</h3>

                <div className="food-bottom">
                  <strong>₹{dish.price}</strong>

                  <Link to={`/details/${index}`} className="home-buy-btn">
                    View Details <FaShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="restaurant-offer" id="offers">
        <div className="offer-content">
          <span>LIMITED TIME OFFER</span>
          <h2>
            Get 30% OFF
            <br />
            On Your First Order!
          </h2>
          <p>Enjoy our delicious biryani and chicken specials.</p>
          <a href="#menu">
            Order Your Favourite <FaArrowRight />
          </a>
        </div>
        <div className="offer-image">
          <img
            src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700"
            alt="Chicken curry special"
          />
        </div>
      </section>

      {/* About */}
      <section className="restaurant-about" id="about">
        <span className="section-label">WHY CHOOSE US</span>
        <h2>More Than Food, It's An Experience!</h2>
        <div className="about-grid">
          <div>
            <span>🍛</span>
            <h3>Authentic Taste</h3>
            <p>Traditional recipes and aromatic spices.</p>
          </div>
          <div>
            <span>🥬</span>
            <h3>Fresh Ingredients</h3>
            <p>Quality ingredients in every dish.</p>
          </div>
          <div>
            <span>👨‍🍳</span>
            <h3>Expert Chefs</h3>
            <p>Prepared by our experienced chefs.</p>
          </div>
          <div>
            <span>🚀</span>
            <h3>Fast Delivery</h3>
            <p>Hot and fresh food delivered to you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
