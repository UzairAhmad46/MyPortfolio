import React from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Languages";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
