import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/common/notfound";
import History from "./components/history";
import Home from "./components/home";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import "font-awesome/css/font-awesome.css";
import Logout from "./components/logout";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="logout" element={<Logout />} />
            <Route path="history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
