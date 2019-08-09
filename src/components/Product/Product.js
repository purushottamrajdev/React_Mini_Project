import React from 'react';

import './Product.css';

const Product = (props) => (
    <div className="Product">
        <img className="ProductImage" src={props.imgPath}/>
        <h2>{props.productTitle}</h2>
        <h4>{props.ProductPrice}</h4>
        <h3>Category:{props.productCategory}</h3>
        <input type="text" id={props.id} onChange={props.onChange} placeholder="Quantity"/>
        <button className="AddToCart" onClick={props.clicked}>ADD TO CART</button>
       
    </div>
);

export default Product;