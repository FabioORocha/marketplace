import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../style/header.css';

import logo from '../assets/images/logotipo.png';
import cart_icon from '../assets/images/cart.png';

const Header = ({ onCartClick }) => {
  const cartItems = useSelector(state => state.cart);

  return(
    <header className="header container">
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <nav className="menu">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li>Produtos</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className="cart-icon" onClick={onCartClick}>
        <img src={cart_icon} alt="cart" />
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </header>
  );
};

export default Header;
