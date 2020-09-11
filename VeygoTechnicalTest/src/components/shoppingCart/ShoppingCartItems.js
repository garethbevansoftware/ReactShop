import React from "react";
import PropTypes from "prop-types";

const ShoppingCartItems = ({ cartItems, handleRemoveItem }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Amount</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>£{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ShoppingCartItems.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ShoppingCartItems;
