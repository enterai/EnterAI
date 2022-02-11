import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 820 && isNavExpanded) {
      setIsNavExpanded(false);
    }
  }, [screenWidth, isNavExpanded]);

  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Courses",
      to: "courses",
    },
    {
      name: "Placements",
      to: "placements",
    },
    {
      name: "About enterAI",
      to: "about",
    },
  ];

  return (
    <div className={isNavExpanded ? "navContainerExpanded" : "navContainer"}>
      <div className={isNavExpanded ? "navContentExpanded" : "navContent"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" className="navLogo">
            <div style={{ display: "flex", alignItems: "center" }}>enterAI</div>
          </Link>
          {isNavExpanded && (
            <span
              className="close-icon"
              onClick={() => setIsNavExpanded(false)}
            >
              <CloseIcon />
            </span>
          )}
        </div>
        {!isNavExpanded && (
          <span className="menu-icon" onClick={() => setIsNavExpanded(true)}>
            <MenuIcon />
          </span>
        )}
        <nav>
          <div className="navLinks">
            {navLinks.map((navLink) => {
              return (
                <div className="navItem" key={navLink.to}>
                  <NavLink
                    to={navLink.to}
                    className="navLink"
                    activeclassname="active"
                    onClick={() => {
                      if (isNavExpanded) {
                        setIsNavExpanded(false);
                      }
                    }}
                  >
                    <div>{navLink.name}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </nav>
        <div className="authBtns">
          <div style={{ marginRight: "20px" }}>
            <Link
              to="/login"
              className="navLink"
              onClick={() => {
                if (isNavExpanded) {
                  setIsNavExpanded(false);
                }
              }}
            >
              <Button
                variant="outlined"
                size="medium"
                style={{
                  borderRadius: "20px",
                  textTransform: "none",
                  color: "black",
                  borderColor: "#9d9d9d",
                }}
              >
                <b>Log In</b>
              </Button>
            </Link>
          </div>
          <div>
            <Link
              to="/register"
              className="navLink"
              onClick={() => {
                if (isNavExpanded) {
                  setIsNavExpanded(false);
                }
              }}
            >
              <Button
                variant="outlined"
                size="medium"
                style={{
                  borderRadius: "20px",
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#0057ff",
                }}
              >
                <b>Register</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
