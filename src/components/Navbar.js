import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHippo } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Button } from "./Button";
function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  console.log("click", click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={(e) => setClick(false)}>
            Sports Buddy &nbsp; <FontAwesomeIcon icon={faHippo} />
          </Link>
          <div className="menu-icon">
            <FontAwesomeIcon
              onClick={(e) => setClick(!click)}
              icon={click ? faXmark : faBars}
              color={"#fff"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(e) => setClick(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={(e) => setClick(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={(e) => setClick(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={(e) => setClick(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn-outline"
              onClick={() => navigate("/join-us")}
            >
              Join Us
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
