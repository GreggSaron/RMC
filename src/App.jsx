import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Cover from "./components/cover";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Cover />
    </div>
  );
}

export default App;
