import React from 'react';
import Rating from './Rating';

const Card = (props) => {
    const {productdata}=props
    return (
        <div class="card">
        <a href="product.html">
         
          <img class="medium" src={productdata.image} alt="product" />
        </a>
        <div class="card-body">
          <a href={`/product/${productdata._id}`}>
            <h2>{productdata.name}</h2>
          </a>
        <Rating rating={productdata.rating} numReviews={productdata.numReviews}/>
          <div class="price">{productdata.price}</div>
        </div>
      </div>
    );
};

export default Card;