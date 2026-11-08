import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./BottNav.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Badge from "@mui/material/Badge";

function BottNav() {
  const location = useLocation();

  // Every page navigation starts from top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "Menu",
      path: "/Menu",
      icon: <RestaurantMenuOutlinedIcon />,
    },
    {
      name: "Cart",
      path: "/Order",
      icon: (
        <Badge badgeContent={3} color="error">
          <ShoppingCartOutlinedIcon />
        </Badge>
      ),
    },
    {
      name: "Account",
      path: "/Login",
      icon: <PersonOutlineOutlinedIcon />,
    },
  ];

  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === "/"}
            className={({ isActive }) =>
              `bottom-nav-item ${isActive ? "active" : ""}`
            }
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default BottNav;
