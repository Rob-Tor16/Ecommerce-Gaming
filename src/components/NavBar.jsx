import React from 'react';
import './NavBar.css';
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import CartWidget from "./cartWidget.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
        <header className="bg-navbar d-flex align-items-center justify-content-center p-0">
          <div><img className="logo-img" src="/img/logo-gaming.png" /></div>
            <nav ref={navRef}>
            <Link className="a active" aria-current="page" to="/">Home</Link>
            <Link className="a text-dark" to="/productos">Productos</Link>
            <Link className="a text-dark" to="/contacto">Contacto</Link>
            <Link className="a text-dark" to="/ayuda">Ayuda</Link>
              <form className="d-flex p-2 gap-2" role="search">
                <CartWidget />
                </form>
              <div className="btn  text-warning p-2 text-dark"onClick={showNavBar}>
                  <FaTimes/>
              </div>
            </nav>
          <button className="btn  text-dark"onClick={showNavBar}>
            <FaBars/>
          </button>
        </header>
    
  )
}

export default NavBar