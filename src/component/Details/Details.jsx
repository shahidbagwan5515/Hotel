import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Details.css";

const dishes = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    category: "Biryani",
    price: 249,
    oldPrice: 329,
    rating: 4.9,
    reviews: 258,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900",
    description:
      "Authentic Hyderabadi chicken biryani prepared with premium basmati rice, tender chicken and aromatic Indian spices.",
  },
  {
    id: 2,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    price: 299,
    oldPrice: 349,
    rating: 4.8,
    reviews: 180,
    image: "https://assets.cookdtv.com/t/1080/tv4m09cifrracluhw3g5mrzp04wn",
    description:
      "Traditional dum cooked chicken biryani with aromatic spices and perfectly cooked basmati rice.",
  },
  {
    id: 3,
    name: "Chicken Tikka",
    category: "Chicken",
    price: 199,
    oldPrice: 249,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900",
    description:
      "Juicy chicken tikka marinated in authentic Indian spices and grilled to perfection.",
  },
  {
    id: 4,
    name: "Chicken Kebab",
    category: "Kebabs",
    price: 229,
    oldPrice: 279,
    rating: 4.8,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900",
    description:
      "Fresh and juicy chicken kebabs prepared with traditional spices and herbs.",
  },
  {
    id: 5,
    name: "Butter Chicken",
    category: "Chicken",
    price: 279,
    oldPrice: 329,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    description:
      "Creamy and rich butter chicken cooked in a delicious tomato-based gravy.",
  },
  {
    id: 6,
    name: "Chicken Lollipop",
    category: "Starters",
    price: 189,
    oldPrice: 229,
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900",
    description:
      "Crispy chicken lollipops coated with spicy marinade and fried until golden.",
  },
  {
    id: 7,
    name: "Chicken Fried Rice",
    category: "Combos",
    price: 219,
    oldPrice: 269,
    rating: 4.7,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:
      "Chicken fried rice tossed with fresh vegetables, chicken and flavourful sauces.",
  },
  {
    id: 8,
    name: "Chicken Tandoori",
    category: "Kebabs",
    price: 349,
    oldPrice: 399,
    rating: 4.9,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900",
    description:
      "Authentic tandoori chicken marinated with yogurt and traditional spices.",
  },
];

function Details() {
  const { id } = useParams();
  const food = dishes.find((dish) => dish.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!food) {
    return (
      <div className="food-not-found">
        <h2>Food Item Not Found!</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="food-details-page">
      <div className="details-main">
        <div className="details-gallery">
          <div className="main-food-image">
            <img src={food.image} alt={food.name} />
          </div>
        </div>

        <div className="details-information">
          <span className="details-category">{food.category}</span>

          <h1>{food.name}</h1>

          <div className="details-rating">
            ⭐ {food.rating}
            <span>({food.reviews} Customer Reviews)</span>
          </div>

          <p className="details-description">{food.description}</p>

          <div className="details-price">
            <strong>₹{food.price}</strong>
            <del>₹{food.oldPrice}</del>
          </div>

          <div className="quantity-section">
            <h3>Quantity</h3>

            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <strong>{quantity}</strong>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="details-total">
            <span>Total Amount</span>
            <strong>₹{food.price * quantity}</strong>
          </div>

          <div className="details-buttons">
            <button className="add-cart-btn">Add To Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
