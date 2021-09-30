import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const { shipping } = props.cartItems;
  console.log(props.cartItems);
  for (const product of props.cartItems) {
    if (!product.quantity) {
      product.quantity = 1;
    }
  }
  const shipping = props.cartItems.reduce((total, current) => {
    return total + current.shipping;
  }, 0);

  const totalQty = props.cartItems.reduce((total, current) => {
    return total + current.quantity;
  }, 0);

  const totalPrice = props.cartItems.reduce((total, current) => {
    return total + current.price;
  }, 0);
  console.log(totalPrice);

  const tax = (totalPrice + shipping) * 0.1;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="cart-container">
      <p>Total Qty: {totalQty}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>
      <p>Shipping Cost: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand-Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
