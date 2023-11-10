import React from "react";

const Home = (props) => {
  console.warn(`Home`, props);
  return (
    <div>
      <h1>Home</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://media.solotodo.com/media/products/1249252_picture_1602843842.png"
            alt="i-phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <span>Price : $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({
                price: 1000,
                name: "i phone 12 pro max",
              });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
