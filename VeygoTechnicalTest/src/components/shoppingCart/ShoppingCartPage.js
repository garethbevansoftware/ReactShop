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

  handleAddToCart = async (item) => {
    toast.success(item.name + " Added To Cart");
    try {
      await this.props.actions.addItemToCart(item);
    } catch (error) {
      toast.error("Delete Failed. " + error.message, { autoClose: false });
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
