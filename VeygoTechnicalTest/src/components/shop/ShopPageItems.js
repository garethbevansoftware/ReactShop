import React from "react";
import PropTypes from "prop-types";

const ShopPageItems = ({ items, handleAddToCart }) => (
  <div className="card-deck">
    {items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
            <button
              className="btn btn-dark"
              onClick={() => handleAddToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      );
    })}
  </div>
);

ShopPageItems.propTypes = {
  items: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ShopPageItems;
