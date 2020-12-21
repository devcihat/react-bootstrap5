import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
