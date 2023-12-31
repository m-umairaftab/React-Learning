import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Umair's Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <React.Fragment key={product?.id}>
            <Product data={product} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Shop;
