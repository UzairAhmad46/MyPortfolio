import "./App.css";

import Home from "./routes/Home";
import About from "../src/routes/About";
import Service from "../src/routes/Service";
// import Contact from "../src/routes/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
