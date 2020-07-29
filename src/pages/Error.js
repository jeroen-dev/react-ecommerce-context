import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Error! We could not load this page</h1>
        <Link className='btn btn-primary' to='/'>
          Back Home
        </Link>
      </div>
    </section>
  );
}
