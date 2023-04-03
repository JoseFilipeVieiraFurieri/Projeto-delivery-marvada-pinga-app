import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Seller from './pages/Seller';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/seller/orders" component={ Seller } />
      <Route exact path="/seller/orders/:id" component={ OrderDetails } />
    </Switch>
  );
}

export default App;
