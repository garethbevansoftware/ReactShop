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
      { id: 1, name: "Slam Funk", price: 9.95 },
      { id: 2, name: "Hawkes Cider", price: 23.95 },
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
  return {};
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
