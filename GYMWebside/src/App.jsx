import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Features />
        <Offer />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
