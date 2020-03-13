import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductList from './List'
import ProductDetails from './Details'

const Product = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/product/list" />
      <Route path="/product/list" component={ProductList} />
      <Route path="/product/:id" component={ProductDetails} />
    </Switch>
  )
}

export default Product