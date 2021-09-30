import React, { useEffect, useState } from "react";
import { addTodb, getFromLocal } from "../../utilities/localDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchedResult, setSearchedResult] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchedResult(data);
      });
  }, []);

  //Side-effect get from local
  useEffect(() => {
    if (products.length) {
      const storedCartObj = getFromLocal();
      const storedProduct = [];
      for (const key in storedCartObj) {
        const matchedProduct = products.find((product) => product.key === key);
        if (matchedProduct) {
          const qty = storedCartObj[key];
          matchedProduct["quantity"] = qty; //also works --> matchedProduct.quantity = qty
          console.log(matchedProduct);
          storedProduct.push(matchedProduct);
        }
      }
      setCartItems(storedProduct);
    }
  }, [products]);

  //Handle cart event / cart update
  const handleAddToCart = (product) => {
    //   cartItems.push(product) -- dont do this
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    addTodb(product.key);
  };

  //Search function event
  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    const matchedResult = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedResult(matchedResult);
  };

  return (
    <div>
      <div className="search-field">
        <input onChange={handleSearch} type="text" name="" id="" />
        <button>Search</button>
      </div>
      <div className="shop-container">
        <div className="product-container">
          {searchedResult.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <h1>Order Details</h1>
          <Cart cartItems={cartItems}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
