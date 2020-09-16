import React from "react";
import { connect } from "react-redux";
import * as shoppingCartActions from "../../redux/actions/shoppingCartActions";
import * as discountActions from "../../redux/actions/discountActions";
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
  Form,
  FormGroup,
  Input,
} from "reactstrap";

class ShoppingCartPage extends React.Component {
  state = {
    discountCode: "",
    redirectToAddCoursePage: false,
    showRecieptModal: false,
    discountTypes: [{ id: 1, name: "50OFF", discount: 50 }],
  };

  componentDidMount() {
    const { cartItems, discounts, actions } = this.props;
    if (cartItems.length === 0) {
      actions.getShoppingCartItems();
    }
    if (discounts.length === 0) {
      actions.getDiscounts();
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

  handleApplyDiscount = async () => {
    var discount = this.state.discountTypes.find(
      (item) => item.name === this.state.discountCode
    );
    if (!discount) {
      toast.error("Discount Code Not Found");
      return;
    }

    if (this.props.discounts.contains(discount)) {
      toast.error("Discount Already Applied");
      return;
    }

    toast.success("Discount Successfully Applied");
    try {
      await this.props.actions.applyDiscount(discount);
    } catch (error) {
      toast.error("Failed To Apply Discount " + error.message, {
        autoClose: false,
      });
    }
  };

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
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
            <Row>
              <Col xs="3">
                <Button color="danger" onClick={() => this.clearCart()}>
                  Clear Cart
                </Button>
              </Col>
              <Col xs="3">
                <Button
                  color="primary"
                  onClick={() => this.toggleRecieptModal()}
                >
                  Show Reciept
                </Button>
              </Col>
              <Col xs="3">
                <FormGroup row>
                  <Input
                    type="discountCode"
                    value={this.state.discountCode}
                    name="discountCode"
                    id="discountCode"
                    placeholder="Discount Code"
                    onChange={this.handleChange}
                  />
                  <Button onClick={() => this.handleApplyDiscount()}>
                    Submit
                  </Button>
                </FormGroup>
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
  discounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cartItems: state.shoppingCartReducer,
    discounts: state.discountReducer,
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
      getDiscounts: bindActionCreators(discountActions.getDiscounts, dispatch),
      applyDiscount: bindActionCreators(
        discountActions.applyDiscount,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
