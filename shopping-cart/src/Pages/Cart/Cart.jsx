import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS?.map((product, i) => {
          return (
            <React.Fragment key={i}>
              {!!cartItems[product.id] && <CartItem data={product} />}
            </React.Fragment>
          );
        })}
        {/* {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            <React.Fragment key={product?.id}>
              <CartItem data={product} />;
            </React.Fragment>;
          }
        })} */}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: $ {totalAmount} </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <h1>Your Cart is empty </h1>
      )}
    </div>
  );
};

export default Cart;
