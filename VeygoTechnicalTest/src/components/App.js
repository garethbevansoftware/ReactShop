import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./shop/ShopPage";
import ShoppingCart from "./shoppingCart/ShoppingCartPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={ShopPage} />
        <Route path="/shoppingCart" component={ShoppingCart} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
