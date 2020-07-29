import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import About from '../src/pages/About';
import Cart from '../src/pages/Cart';
import Checkout from '../src/pages/Checkout';
import Error from '../src/pages/Error';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Products from '../src/pages/Products';
import ProductDetails from '../src/pages/ProductDetails';

import Header from '../src/components/Header';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import ScrollButton from './components/ScrollButton';

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Alert />
        <ScrollButton />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <PrivateRoute path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route
            path='/products/:id'
            children={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}
