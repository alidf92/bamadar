import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Order from "./pages/Order";
import Profile from "./pages/Profile";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/category" component={Category} />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
