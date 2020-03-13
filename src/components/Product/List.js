import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <ul className="list-group list-group">
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/1">1</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/2">2</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/3">3</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/4">4</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/5">5</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/6">6</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/7">7</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/8">8</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/9">9</Link>
      </li>
      <li className="col-md-2">
        <Link className="list-group-item" to="/product/10">10</Link>
      </li>
    </ul>
  )
}

export default ProductList