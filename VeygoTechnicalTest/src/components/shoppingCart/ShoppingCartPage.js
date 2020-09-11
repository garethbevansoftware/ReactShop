import React from "react";
import { connect } from "react-redux";
import * as shoppingCartActions from "../../redux/actions/shoppingCartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import ShoppingCartItems from "./ShoppingCartItems";

class ShoppingCartPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { cartItems, actions } = this.props;
    if (cartItems.length === 0) {
      actions.getShoppingCartItems();
    }
  }

  clearCart = async () => {
    toast.success("Cart Cleared");
    try {
      await this.props.actions.clearCart();
    } catch (error) {
      toast.error("Clearing Cart Failed. " + error.message, {
        autoClose: false,
      });
    }
  };

  render() {
    return (
      <>
        <h2>Products</h2>
        <>
          <ShoppingCartItems
            handleAddToCart={this.handleAddToCart}
            cartItems={this.props.cartItems}
          />
          <button className="btn btn-dark" onClick={() => this.clearCart()}>
            Clear Cart
          </button>
        </>
      </>
    );
  }
}

ShoppingCartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cartItems: state.shoppingCartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getShoppingCartItems: bindActionCreators(
        shoppingCartActions.getShoppingCartItems,
        dispatch
      ),
      clearCart: bindActionCreators(shoppingCartActions.clearCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
