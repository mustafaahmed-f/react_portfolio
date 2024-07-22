import { useState } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import About from "./Components/About";

function App() {
  return (
    <div className="main">
      <Navbar />
      <HomePage />
      <About />
    </div>
  );
}

export default App;
