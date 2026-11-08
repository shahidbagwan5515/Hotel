import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

import {
  FaSearch,
  FaStar,
  FaShoppingCart,
  FaFire,
  FaUtensils,
  FaFilter,
  FaPlus,
  FaMinus,
  FaBolt,
} from "react-icons/fa";

// FOOD DATA
const dishes = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    category: "Biryani",
    price: 249,
    oldPrice: 329,
    rating: 4.9,
    tag: "Bestseller",
    reviews: 258,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900",
    description:
      "Experience authentic Hyderabadi Chicken Biryani, prepared with premium basmati rice, tender chicken and aromatic Indian spices.",
  },
  {
    id: 2,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    price: 299,
    oldPrice: 349,
    rating: 4.8,
    tag: "Chef Special",
    reviews: 180,
    image: "https://assets.cookdtv.com/t/1080/tv4m09cifrracluhw3g5mrzp04wn",
    description:
      "Traditional dum cooked chicken biryani with perfectly cooked basmati rice, fresh herbs and rich flavours.",
  },
  {
    id: 3,
    name: "Chicken Tikka",
    category: "Chicken",
    price: 199,
    oldPrice: 249,
    rating: 4.7,
    tag: "Popular",
    reviews: 145,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900",
    description:
      "Juicy chicken pieces marinated in authentic Indian spices and grilled to perfection.",
  },
  {
    id: 4,
    name: "Chicken Kebab",
    category: "Kebabs",
    price: 229,
    oldPrice: 279,
    rating: 4.8,
    tag: "Special",
    reviews: 120,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900",
    description:
      "Delicious and juicy chicken kebabs prepared with traditional spices and fresh herbs.",
  },
  {
    id: 5,
    name: "Butter Chicken",
    category: "Chicken",
    price: 279,
    oldPrice: 329,
    rating: 4.9,
    tag: "Bestseller",
    reviews: 210,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    description:
      "Creamy and rich butter chicken cooked in a delicious tomato-based gravy with authentic Indian spices.",
  },
  {
    id: 6,
    name: "Chicken Lollipop",
    category: "Starters",
    price: 189,
    oldPrice: 229,
    rating: 4.6,
    tag: "Popular",
    reviews: 95,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900",
    description:
      "Crispy chicken lollipops coated with spicy marinade and fried until golden and delicious.",
  },
  {
    id: 7,
    name: "Chicken Fried Rice",
    category: "Combos",
    price: 219,
    oldPrice: 269,
    rating: 4.7,
    tag: "Value Meal",
    reviews: 110,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:
      "Delicious chicken fried rice tossed with fresh vegetables, chicken and flavourful sauces.",
  },
  {
    id: 8,
    name: "Chicken Tandoori",
    category: "Kebabs",
    price: 349,
    oldPrice: 399,
    rating: 4.9,
    tag: "Chef Special",
    reviews: 175,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900",
    description:
      "Authentic tandoori chicken marinated with yogurt and traditional spices, roasted to perfection.",
  },
];

// CATEGORIES
const categories = [
  "All Items",
  "Biryani",
  "Chicken",
  "Kebabs",
  "Starters",
  "Combos",
];

function Menu({ onAddToCart }) {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All Items");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  // CART STATE - NO LOCAL STORAGE
  const [cart, setCart] = useState({});

  // FILTER AND SORT
  const filteredDishes = useMemo(() => {
    let result = dishes.filter((dish) => {
      const matchCategory =
        activeCategory === "All Items" || dish.category === activeCategory;

      const matchSearch = dish.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchCategory && matchSearch;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, search, sort]);

  // ADD TO CART
  const addToCart = (dish) => {
    setCart((prev) => ({
      ...prev,
      [dish.id]: (prev[dish.id] || 0) + 1,
    }));

    // Parent component ko cart update bhejo
    onAddToCart?.(dish);
  };

  // REMOVE FROM CART
  const removeFromCart = (dish) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[dish.id] > 1) {
        updated[dish.id] -= 1;
      } else {
        delete updated[dish.id];
      }

      return updated;
    });
  };

  // BUY NOW
  const buyNow = (dish) => {
    addToCart(dish);

    navigate("/cart", {
      state: {
        product: dish,
        quantity: (cart[dish.id] || 0) + 1,
      },
    });
  };

  // CART COUNT
  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  // CART TOTAL
  const cartTotal = dishes.reduce(
    (total, dish) => total + dish.price * (cart[dish.id] || 0),
    0,
  );

  // RESET FILTERS
  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All Items");
    setSort("default");
  };

  return (
    <div className="restaurant-menu-page">
      {/* HERO SECTION */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>

        <div className="menu-hero-content">
          <span className="menu-tag">
            <FaFire /> OUR FOOD COLLECTION
          </span>

          <h1>
            Explore Our <span>Delicious Menu</span>
          </h1>

          <p>
            From authentic Hyderabadi biryani to juicy chicken starters,
            discover your favourite flavours.
          </p>

          <div className="menu-breadcrumb">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <strong>Menu</strong>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="menu-main">
        {/* TOP HEADING */}
        <div className="menu-top">
          <div>
            <span className="menu-section-label">FRESHLY PREPARED FOR YOU</span>

            <h2>Discover Our Menu</h2>

            <p>Choose your favourite food and enjoy every bite.</p>
          </div>

          {/* CART INFO */}
          <Link to="/cart" className="menu-cart-info">
            <FaShoppingCart />

            <span>{cartCount} Items</span>

            <span className="menu-header-count">₹{cartTotal}</span>
          </Link>
        </div>

        {/* FILTER BAR */}
        <div className="menu-filter-bar">
          {/* CATEGORIES */}
          <div className="menu-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "menu-category active"
                    : "menu-category"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SEARCH AND SORT */}
          <div className="menu-tools">
            <div className="menu-search">
              <FaSearch />

              <input
                type="text"
                placeholder="Search your food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="menu-sort">
              <FaFilter />

              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default Sort</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* RESULT HEADING */}
        <div className="menu-result-heading">
          <h3>
            {activeCategory === "All Items"
              ? "All Delicious Dishes"
              : activeCategory}
          </h3>

          <span>{filteredDishes.length} Items Available</span>
        </div>

        {/* FOOD GRID */}
        <div className="menu-food-grid">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <div className="menu-food-card" key={dish.id}>
                {/* FOOD IMAGE */}
                <div className="menu-food-image">
                  <Link to={`/details/${dish.id}`}>
                    <img src={dish.image} alt={dish.name} loading="lazy" />
                  </Link>

                  <span className="menu-food-badge">{dish.tag}</span>

                  <span className="menu-food-rating">
                    <FaStar /> {dish.rating}
                  </span>
                </div>

                {/* FOOD INFORMATION */}
                <div className="menu-food-info">
                  <span className="menu-food-category">{dish.category}</span>

                  <h3>
                    <Link
                      to={`/details/${dish.id}`}
                      className="menu-details-link"
                    >
                      {dish.name}
                    </Link>
                  </h3>

                  <p>{dish.description}</p>

                  {/* PRICE AND CART */}
                  <div className="menu-food-bottom">
                    <div className="menu-price">
                      <strong>₹{dish.price}</strong>
                      <del>₹{dish.oldPrice}</del>
                    </div>

                    {cart[dish.id] ? (
                      <div className="menu-quantity">
                        <button
                          onClick={() => removeFromCart(dish)}
                          aria-label="Decrease quantity"
                        >
                          <FaMinus />
                        </button>

                        <span>{cart[dish.id]}</span>

                        <button
                          onClick={() => addToCart(dish)}
                          aria-label="Increase quantity"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="menu-add-button"
                        onClick={() => addToCart(dish)}
                      >
                        Add to Cart <FaShoppingCart />
                      </button>
                    )}
                  </div>

                  {/* BUY NOW */}
                  <button
                    className="menu-buy-button"
                    onClick={() => buyNow(dish)}
                  >
                    Buy Now <FaBolt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="menu-empty">
              <FaUtensils />

              <h3>No Food Found!</h3>

              <p>Try searching another dish or category.</p>

              <button onClick={resetFilters}>View All Items</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Menu;
