import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (prodId) => {
    dispatch(remove(prodId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((prod) => (
          <div className="cartCard" key={prod.id}>
            <img src={prod.image} alt="fool" />
            <h5>{prod.title}</h5>
            <h5>{prod.price}</h5>
            <button onClick={() => handleRemove(prod.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;