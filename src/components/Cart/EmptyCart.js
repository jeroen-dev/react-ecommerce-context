import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <section className='empty-cart'>
      <h1 style={{ marginTop: '4rem' }}>Empty Cart...</h1>
      <Link to='/products' className='btn btn-primary'>
        Go shopping!
      </Link>
    </section>
  );
}
