import React from "react";
import { connect } from "react-redux";
import * as shoppingCartActions from "../../redux/actions/shoppingCartActions";
import PropTypes from "prop-types";
import ShopPageItems from "./ShopPageItems";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

class ShopPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
    items: [
      { id: 1, name: "1 Week Learner Insurance", price: 100 },
      { id: 2, name: "1 Month Learner Insurance", price: 300 },
      { id: 3, name: "1 Week Temporary Car Insurance", price: 70 },
      { id: 4, name: "1 Month Temporary Car Insurance", price: 210 },
    ],
  };

  handleAddToCart = async (item) => {
    toast.success(item.name + " Added To Cart");
    try {
      item.quantity = 1;
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
          <ShopPageItems
            handleAddToCart={this.handleAddToCart}
            items={this.state.items}
          />
        </>
      </>
    );
  }
}

ShopPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addItemToCart: bindActionCreators(
        shoppingCartActions.addItemToCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
