import React from "react";
import PropTypes from "prop-types";

const ShoppingCartItems = ({ cartItems, handleRemoveItem, total }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>£{item.price}</td>
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
      <tr>
        <td></td>
        <td>Total</td>
        <td>£{total}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
);

ShoppingCartItems.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default ShoppingCartItems;
