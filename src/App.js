import React, { Component } from 'react';
import './App.css';
import Header from './ProductList/header';
import ProductList from './ProductList/product-list';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductList/product-details';

class App extends Component {
  render() {
    return (
      <section className="mainPageArea">
          <Header />
          <section className="main">
            <Switch>
              <Route exact path='/' component={ProductList}/>
              <Route path='/productList/:groupID' component={ProductList}/>
              <Route path='/productDetails/:productID' component={ProductDetails}/>
            </Switch>
          </section>
      </section>
    );
  }
}

export default App;
