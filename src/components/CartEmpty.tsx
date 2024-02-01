import React from 'react';

import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';
import '../scss/components/_emptyCart.scss';

export const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart-empty">
      <h2>
        Empty cart <span>😕</span>
      </h2>
      <p>
        You haven't ordered anything. <br />
        To order go to the main page
      </p>
      <img src={cartEmptyImg} alt="empty cart" />
      <Link to="/" className="button button-black">
        <span>Back</span>
      </Link>
    </div>
  );
};
