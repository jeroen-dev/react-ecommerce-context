import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);

  if (user.token) {
    return (
      <button
        style={{ fontSize: '1rem', fontWeight: '600', marginLeft: '1rem' }}
        className='login-btn'
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        Logout
      </button>
    );
  }
  return (
    <Link style={{ fontWeight: '600', marginLeft: '1rem' }} to='/login'>
      login
    </Link>
  );
}
