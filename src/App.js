import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is  >> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SETUSER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello clever programmer lets build amazone store</h1> */}

        <Switch>
          <Route path="/login">
          <Header />

            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/product_detail">
            <Header />
            <ProductDetail />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
