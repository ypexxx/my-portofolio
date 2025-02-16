import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portofolio from "./pages/Portofolio";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Navbar />
      <Background/>
      <Home />
      <About />
      <Portofolio/>
    </>
  );
}

export default App;
