import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import CartLink from '../components/Cart/CartLink';
import LoginLink from '../components/LoginLink';

export default function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className='header'>
      <nav>
        <ul>
          <div>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            {user.token && (
              <li>
                <Link to='/checkout'>checkout</Link>
              </li>
            )}
          </div>

          <div>
            <li>
              <CartLink />
            </li>
            <li>
              <LoginLink />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
