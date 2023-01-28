import './App.css';
import React from "react";
import Header from './components/primary/Header';
import Nav from './components/primary/Nav';
import Main from './components/primary/Main';
import Footer from './components/primary/Footer';

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