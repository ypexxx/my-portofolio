import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
