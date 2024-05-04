import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Cover from "./components/cover";

function App() {
  return (
    <div className="mainContainer">
      <img src="src\assets\cover\sofa.jpeg" style={{
        position: 'absolute',
        right: '-15%',
        width: '72%',
        zIndex: '-1'
      }} />
      <img src="src\assets\cover\line.svg" style={{
        position: 'absolute',
        top: '150px',
        left: '0%',
        width: '50%',
        zIndex: '-2'
      }} />
      <Header />
      <Cover />
    </div>
  );
}

export default App;
