import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

function getAuthData() {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    user = null;
  }

  return {
    isLoggedIn: !!localStorage.getItem("userToken"),
    username: user?.name || user?.username || user?.full_name || "Account",
  };
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(getAuthData);

  const navigate = useNavigate();

  // Update header after login/logout
  useEffect(() => {
    const updateAuth = () => {
      setAuth(getAuthData());
    };

    window.addEventListener("storage", updateAuth);
    window.addEventListener("authChanged", updateAuth);

    return () => {
      window.removeEventListener("storage", updateAuth);
      window.removeEventListener("authChanged", updateAuth);
    };
  }, []);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");

    setAuth(getAuthData());
    handleClose();
    closeMenu();

    window.dispatchEvent(new Event("authChanged"));
    navigate("/");
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Menu", href: "/Menu" },
    { name: "Order", href: "/Order" },
    { name: "About Us", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header className="restaurant-header">
      <div className="restaurant-nav">
        {/* LOGO */}
        <Link to="/" className="restaurant-logo" onClick={closeMenu}>
          <span className="logo-symbol">♨</span>

          <div className="logo-content">
            <h2>
              ROYAL<span>ZAAYKA</span>
            </h2>
            <small>BIRYANI & CHICKEN HOUSE</small>
          </div>
        </Link>

        {/* DESKTOP / MOBILE NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          {links.map((link) => (
            <Link to={link.href} key={link.name} onClick={closeMenu}>
              {link.name}
            </Link>
          ))}

          <Link to="/Menu" className="mobile-order-btn" onClick={closeMenu}>
            Order Now ↗
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          <div className="Header-icons">
            {/* SHOPPING CART */}
            <Link to="/Order" aria-label="Shopping Cart">
              <IconButton sx={{ color: "#fff" }}>
                <Badge badgeContent={3} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* USER ACCOUNT + USERNAME */}
            <IconButton
              onClick={handleOpen}
              aria-label="User Account"
              sx={{
                color: "#fff",
                display: "flex",
                gap: "7px",
                borderRadius: "8px",
                px: 1,
              }}
            >
              <PersonOutlinedIcon />

              <span className="header-username">
                {auth.isLoggedIn ? auth.username : "Login"}
              </span>
            </IconButton>
          </div>

          {/* USER DROPDOWN */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                minWidth: 180,
                mt: 1,
                borderRadius: "10px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            {auth.isLoggedIn ? (
              <>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/Profile");
                  }}
                >
                  <ListItemIcon>
                    <PersonOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Profile" />
                </MenuItem>

                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/Login");
                  }}
                >
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/Register");
                  }}
                >
                  <ListItemIcon>
                    <PersonOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </MenuItem>
              </>
            )}
          </Menu>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
