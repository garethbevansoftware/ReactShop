import React from "react";
import PropTypes from "prop-types";

const ShopPageItems = ({ items, handleAddToCart }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>£{item.price}</td>
            <td>
              <button
                className="btn btn-dark"
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ShopPageItems.propTypes = {
  items: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ShopPageItems;
