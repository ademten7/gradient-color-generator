import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ColorBox from "./components/ColorBox";
import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ColorBox />
      </div>
    </div>
  );
}

export default App;
