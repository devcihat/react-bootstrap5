import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Mainmiddle from "./components/Mainmiddle";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Middle />
      <Mainmiddle />
      <Footer />
    </div>
  );
}

export default App;
