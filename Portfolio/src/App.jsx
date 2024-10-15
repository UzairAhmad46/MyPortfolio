import React from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Languages";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
