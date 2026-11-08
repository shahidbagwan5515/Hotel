import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Order.css";

import {
  FaShoppingBag,
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaReceipt,
  FaRedo,
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaTimesCircle,
  FaUtensils,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

const initialOrders = [
  {
    id: "ORD-2026-001",
    date: "08 Nov 2026",
    time: "01:30 PM",
    status: "Delivered",
    payment: "Paid",
    paymentMethod: "UPI Payment",
    address: "Mumbai, Maharashtra, India",
    phone: "+91 98765 43210",
    items: [
      {
        id: 1,
        name: "Special Chicken Biryani",
        quantity: 2,
        price: 199,
        image: "https://assets.cookdtv.com/t/1080/tv4m09cifrracluhw3g5mrzp04wn",
      },
      {
        id: 2,
        name: "Butter Chicken",
        quantity: 1,
        price: 249,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=200&q=80",
      },
    ],
    subtotal: 647,
    delivery: 40,
    discount: 50,
    total: 637,
  },
  {
    id: "ORD-2026-002",
    date: "07 Nov 2026",
    time: "07:45 PM",
    status: "On the Way",
    payment: "Paid",
    paymentMethod: "Cashless Payment",
    address: "Andheri West, Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    items: [
      {
        id: 1,
        name: "Paneer Butter Masala",
        quantity: 1,
        price: 179,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 2,
        name: "Butter Naan",
        quantity: 3,
        price: 40,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=200&q=80",
      },
    ],
    subtotal: 299,
    delivery: 30,
    discount: 20,
    total: 309,
  },
  {
    id: "ORD-2026-003",
    date: "06 Nov 2026",
    time: "02:15 PM",
    status: "Processing",
    payment: "Pending",
    paymentMethod: "Cash on Delivery",
    address: "Bandra East, Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    items: [
      {
        id: 1,
        name: "Delicious Pizza",
        quantity: 1,
        price: 249,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80",
      },
    ],
    subtotal: 249,
    delivery: 40,
    discount: 0,
    total: 289,
  },
  {
    id: "ORD-2026-004",
    date: "04 Nov 2026",
    time: "08:00 PM",
    status: "Cancelled",
    payment: "Refunded",
    paymentMethod: "UPI Payment",
    address: "Mumbai, Maharashtra, India",
    phone: "+91 98765 43210",
    items: [
      {
        id: 1,
        name: "Grilled Chicken",
        quantity: 1,
        price: 229,
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=200&q=80",
      },
    ],
    subtotal: 229,
    delivery: 30,
    discount: 0,
    total: 259,
  },
];

const filterOptions = [
  "All Orders",
  "Processing",
  "On the Way",
  "Delivered",
  "Cancelled",
];

function Order() {
  const [orders] = useState(initialOrders);
  const [activeFilter, setActiveFilter] = useState("All Orders");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const filteredOrders = orders.filter((order) => {
    if (activeFilter === "All Orders") return true;
    return order.status === activeFilter;
  });

  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered",
  ).length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Processing" || order.status === "On the Way",
  ).length;

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FaCheckCircle />;
      case "On the Way":
        return <FaTruck />;
      case "Processing":
        return <FaClock />;
      case "Cancelled":
        return <FaTimesCircle />;
      default:
        return <FaBoxOpen />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "status-delivered";
      case "On the Way":
        return "status-transit";
      case "Processing":
        return "status-processing";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  const toggleDetails = (orderId) => {
    setExpandedOrder((previous) => (previous === orderId ? null : orderId));
  };

  const handleReorder = (order) => {
    alert(
      `Reorder request for ${order.id}. Connect your cart system to add these products.`,
    );
  };

  const handleTrackOrder = (order) => {
    alert(`Tracking details for ${order.id}`);
  };

  return (
    <div className="order-page">
      <main className="order-container">
        {/* ORDER HEADER */}
        <section className="order-list-section">
          <div className="order-list-heading">
            <div>
              <span className="order-small-label">ORDER HISTORY</span>

              <h2>
                Your Recent <span>Orders</span>
              </h2>

              <p>Manage and track all your food orders.</p>
            </div>

            <Link to="/Menu" className="order-menu-link">
              Explore Menu <FaArrowRight />
            </Link>
          </div>

          {/* FILTERS */}
          <div className="order-filter-tabs">
            {filterOptions.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => {
                  setActiveFilter(filter);
                  setExpandedOrder(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* ORDER CARDS */}
          <div className="order-list">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <article className="order-card" key={order.id}>
                  {/* CARD HEADER */}
                  <div className="order-card-header">
                    <div className="order-id-info">
                      <div className="order-bag-icon">
                        <FaShoppingBag />
                      </div>

                      <div>
                        <span>ORDER ID</span>
                        <h3>{order.id}</h3>
                      </div>
                    </div>

                    <div
                      className={`order-status ${getStatusClass(order.status)}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                  </div>

                  {/* ORDER INFO */}
                  <div className="order-meta">
                    <span>
                      <FaCalendarAlt />
                      {order.date}
                    </span>

                    <span>
                      <FaClock />
                      {order.time}
                    </span>

                    <span>
                      <FaReceipt />
                      {order.items.length} Items
                    </span>
                  </div>

                  {/* PRODUCTS */}
                  <div className="order-items">
                    {order.items.map((item) => (
                      <div className="order-item" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <div className="order-item-info">
                          <h4>{item.name}</h4>
                          <span>Qty: {item.quantity}</span>
                        </div>

                        <strong>₹{item.price * item.quantity}</strong>
                      </div>
                    ))}
                  </div>

                  {/* ORDER FOOTER */}
                  <div className="order-card-footer">
                    <div className="order-total">
                      <span>Total Amount</span>
                      <strong>₹{order.total}</strong>
                    </div>

                    <div className="order-actions">
                      {order.status === "On the Way" && (
                        <button
                          type="button"
                          className="order-track-btn"
                          onClick={() => handleTrackOrder(order)}
                        >
                          <FaTruck /> Track Order
                        </button>
                      )}

                      {order.status === "Delivered" && (
                        <button
                          type="button"
                          className="order-reorder-btn"
                          onClick={() => handleReorder(order)}
                        >
                          <FaRedo /> Reorder
                        </button>
                      )}

                      <button
                        type="button"
                        className="order-details-btn"
                        onClick={() => toggleDetails(order.id)}
                      >
                        Details
                        {expandedOrder === order.id ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* EXPANDED DETAILS */}
                  {expandedOrder === order.id && (
                    <div className="order-expanded">
                      {/* TRACKING */}
                      {order.status !== "Cancelled" && (
                        <div className="order-tracking">
                          <h3>Order Progress</h3>

                          <div className="order-timeline">
                            <div className="timeline-step completed">
                              <div className="timeline-dot">
                                <FaCheckCircle />
                              </div>
                              <span>Order Placed</span>
                            </div>

                            <div
                              className={`timeline-line ${
                                order.status !== "Processing" ? "completed" : ""
                              }`}
                            />

                            <div
                              className={`timeline-step ${
                                order.status !== "Processing"
                                  ? "completed"
                                  : "current"
                              }`}
                            >
                              <div className="timeline-dot">
                                <FaUtensils />
                              </div>
                              <span>Preparing</span>
                            </div>

                            <div
                              className={`timeline-line ${
                                order.status === "On the Way" ||
                                order.status === "Delivered"
                                  ? "completed"
                                  : ""
                              }`}
                            />

                            <div
                              className={`timeline-step ${
                                order.status === "On the Way"
                                  ? "current"
                                  : order.status === "Delivered"
                                    ? "completed"
                                    : ""
                              }`}
                            >
                              <div className="timeline-dot">
                                <FaTruck />
                              </div>
                              <span>On the Way</span>
                            </div>

                            <div
                              className={`timeline-line ${
                                order.status === "Delivered" ? "completed" : ""
                              }`}
                            />

                            <div
                              className={`timeline-step ${
                                order.status === "Delivered" ? "completed" : ""
                              }`}
                            >
                              <div className="timeline-dot">
                                <FaCheckCircle />
                              </div>
                              <span>Delivered</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {order.status === "Cancelled" && (
                        <div className="order-cancelled-message">
                          <FaTimesCircle />
                          This order has been cancelled.
                        </div>
                      )}

                      {/* DELIVERY DETAILS */}
                      <div className="order-detail-grid">
                        <div className="order-detail-box">
                          <h4>
                            <FaMapMarkerAlt /> Delivery Address
                          </h4>

                          <p>{order.address}</p>
                          <span>{order.phone}</span>
                        </div>

                        <div className="order-detail-box">
                          <h4>
                            <FaReceipt /> Payment Information
                          </h4>

                          <p>{order.paymentMethod}</p>
                          <span>Payment: {order.payment}</span>
                        </div>
                      </div>

                      {/* BILL SUMMARY */}
                      <div className="order-bill">
                        <h3>Bill Summary</h3>

                        <div>
                          <span>Subtotal</span>
                          <strong>₹{order.subtotal}</strong>
                        </div>

                        <div>
                          <span>Delivery Fee</span>
                          <strong>₹{order.delivery}</strong>
                        </div>

                        <div>
                          <span>Discount</span>
                          <strong className="bill-discount">
                            -₹{order.discount}
                          </strong>
                        </div>

                        <div className="bill-final">
                          <span>Grand Total</span>
                          <strong>₹{order.total}</strong>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className="order-empty">
                <div className="order-empty-icon">
                  <FaShoppingBag />
                </div>

                <h3>No Orders Found</h3>

                <p>
                  You don't have any {activeFilter.toLowerCase()} at the moment.
                </p>

                <a href="/menu">
                  Explore Menu <FaArrowRight />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* HELP SECTION */}
        <section className="order-help">
          <div className="order-help-icon">
            <FaPhoneAlt />
          </div>

          <div>
            <h3>Need Help With Your Order?</h3>
            <p>
              Contact our support team for any order-related questions or
              assistance.
            </p>
          </div>

          <a href="/contact">
            Contact Us <FaArrowRight />
          </a>
        </section>
      </main>
    </div>
  );
}

export default Order;
