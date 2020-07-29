import React from 'react';
import { ProductContext } from '../../context/products';

const Filters = () => {
  const {
    filters: { search, category, shipping, country, price },
    updateFilters,
    sorted,
  } = React.useContext(ProductContext);
  return (
    <section className='filters-section'>
      <h2 className='section-title'>Search your favorite wine</h2>
      <form className='filters-form'>
        <div>
          <div className='form-group'>
            <label htmlFor='search'>Search wine</label>
            <input
              type='text'
              id='search'
              name='search'
              value={search}
              onChange={updateFilters}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Wines</label>
            <select
              name='category'
              id='category'
              className='form-control'
              value={category}
              onChange={updateFilters}
            >
              <option value='all'>All</option>
              <option value='rodewijn'>Red Wine</option>
              <option value='wittewijn'>White Wine</option>
              <option value='zoetewijn'>Sweet Wine</option>
              <option value='mousserendewijn'>Sparkling Wine</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Country</label>
            <select
              name='country'
              id='country'
              className='form-control'
              value={country}
              onChange={updateFilters}
            >
              <option value='all'>All</option>
              <option value='Frankrijk'>France</option>
              <option value='Spanje'>Spain</option>
              <option value='Italia'>Italy</option>
              <option value='Portugal'>Portugal</option>
            </select>
          </div>
          <div className='form-group'>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor='shipping'>Free Shipping</label>
          </div>
        </div>
        <div className='price-group'>
          <p>price</p>
          <label>
            <input
              type='radio'
              name='price'
              value='all'
              checked={price === 'all'}
              onChange={updateFilters}
            ></input>
            all
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='0'
              checked={price === 0}
              onChange={updateFilters}
            ></input>
            € 0 - €10
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='10'
              checked={price === 10}
              onChange={updateFilters}
            ></input>
            €10 - €20
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='20'
              checked={price === 20}
              onChange={updateFilters}
            ></input>
            €20 - €30
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='30'
              checked={price === 30}
              onChange={updateFilters}
            ></input>
            > €30
          </label>
        </div>
      </form>
      <h6>total products : {sorted.flat().length}</h6>
      <hr />
    </section>
  );
};

export default Filters;
