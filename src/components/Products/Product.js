import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import img from '../../assets/mainBcg.jpg';

export default function Product({ image, title, id, price }) {
  return (
    <Link to={`products/${id}`}>
      <article className='product'>
        <div className='img-container'>
          <img src={image || img} alt={title || 'default title'} />
          <button className='btn btn-primary product-link'>details</button>
        </div>
        <div className='product-footer'>
          <p className='product-title'>{title || 'default title'}</p>
          <p className='product-price'>€{price || 0}</p>
        </div>
      </article>
    </Link>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
