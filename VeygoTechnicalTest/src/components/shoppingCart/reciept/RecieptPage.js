import React from "react";
import PropTypes from "prop-types";

const RecieptModal = ({ cartItems, total }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.quantity}</td>
              <td>{item.name}</td>
              <td>£{item.price}</td>
            </tr>
          );
        })}
        <tr>
          <td>Total</td>
          <td>£{total}</td>
        </tr>
      </tbody>
    </table>
  </>
);

RecieptModal.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired,
};

export default RecieptModal;
