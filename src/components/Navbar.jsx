import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

import "./Navbar.css";

const Navbar = ({ User }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const parallax = document.querySelector(".paralax");
      // const karusel = document.querySelector('.karusel');
      // Extract itemscount from CartContex
      if (navbar && parallax) {
        // const navbarHeight = navbar.offsetTop;
        // const navbarBottom = navbar.offsetTop + navbarHeight + karusel.offsetHeight;
        const parallaxBottom = parallax.offsetTop + parallax.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= parallaxBottom) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { cartItems } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className={`text-gray-600 body-font ${isSticky ? "sticky" : ""}`}>
      <div className="navbar mb-5">
        <Hamburger />
      </div>
    </header>
  );
};

const CartCircle = styled.div`
  position: absolute;
  background-color: #13122e;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;

  @media (max-width: 500px) {
    position: initial;
  }
`;

export default Navbar;