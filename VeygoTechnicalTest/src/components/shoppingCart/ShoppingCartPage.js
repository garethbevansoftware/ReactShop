import React from "react";
import { connect } from "react-redux";
import * as shoppingCartActions from "../../redux/actions/shoppingCartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import ReceiptModal from "./reciept/RecieptPage";
import ShoppingCartItems from "./ShoppingCartItems";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

class ShoppingCartPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
    showRecieptModal: false,
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

  toggleRecieptModal = async () => {
    this.setState({
      showRecieptModal: !this.state.showRecieptModal,
    });
  };

  handleRemoveItem = async (item) => {
    toast.success(item.name + "Successfully Removed");
    try {
      await this.props.actions.removeItemFromCart(item);
    } catch (error) {
      toast.error("Clearing Cart Failed. " + error.message, {
        autoClose: false,
      });
    }
  };

  calculateTotal() {
    const { cartItems } = this.props;
    if (cartItems.length > 0) {
      var result = cartItems
        .reduce(function (sum, item) {
          return sum + item.price * item.quantity;
        }, 0)
        .toFixed(2);
      return result;
    }
    return 0;
  }

  render() {
    return (
      <>
        <h2>Shopping Cart</h2>
        <>
          <ShoppingCartItems
            handleRemoveItem={this.handleRemoveItem}
            cartItems={this.props.cartItems}
            total={this.calculateTotal()}
          />
          <Container fluid={true}>
            <Row xs="3">
              <Col>
                <Button color="danger" onClick={() => this.clearCart()}>
                  Clear Cart
                </Button>
              </Col>
              <Col>
                <Button
                  color="primary"
                  onClick={() => this.toggleRecieptModal()}
                >
                  Show Reciept
                </Button>
              </Col>
            </Row>
          </Container>
          <Modal
            isOpen={this.state.showRecieptModal}
            toggle={this.toggleRecieptModal}
          >
            <ModalHeader toggle={this.toggle}>
              <Container>
                <Row>
                  <h1 className="text-center">Veygo Shop</h1>
                </Row>
              </Container>
            </ModalHeader>
            <ModalBody>
              <ReceiptModal
                cartItems={this.props.cartItems}
                total={this.calculateTotal()}
              ></ReceiptModal>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
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
      removeItemFromCart: bindActionCreators(
        shoppingCartActions.removeItemFromCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
