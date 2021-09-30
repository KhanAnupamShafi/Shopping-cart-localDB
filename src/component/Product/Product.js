import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const handleAddToCart = props.handleAddToCart;
  const { name, category, seller, price, shipping, img, star } = props.product;

  return (
    <div className="product-cart">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-description">
        <h2 className="title">
          <small>
            {name} <span>by {seller}</span>
          </small>
        </h2>
        <p>Category: {category}</p>
        <p>
          <sup>$</sup> {price}
          <span> </span>
          <small>(+${shipping} shipping to Bangladesh)</small>
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star star-color"
          readonly
        ></Rating>
      </div>

      <div className="button">
        <button
          onClick={() => handleAddToCart(props.product)}
          className="btn-cart"
          type="button"
        >
          Add to cart
        </button>
        <button className="btn-buy" type="button">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Product;
