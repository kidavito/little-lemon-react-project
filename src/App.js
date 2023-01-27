import './App.css';
import React from "react";
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="page-top">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </>
  )
}