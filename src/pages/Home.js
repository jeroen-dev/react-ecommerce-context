import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Hero>
        <Link
          to='/products'
          className='btn btn-primary'
          style={{ fontSize: '1.2rem' }}
        >
          Our wines
        </Link>
      </Hero>
      <FeaturedProducts />
    </>
  );
}
