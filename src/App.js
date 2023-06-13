import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/primary/Header";
import Nav from "./components/primary/Nav";
import Main from "./components/primary/Main";
import Footer from "./components/primary/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
