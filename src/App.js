import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import "font-awesome/css/font-awesome.css";
import Navbar from "./components/navbar";
import NotFound from "./components/common/notfound";
import History from "./components/history";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Navbar />
        <ToastContainer />
        <div>
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
