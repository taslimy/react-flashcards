import React from "react";

import Card from "./components/card/card.component";
import Header from "./components/header/header.component";
import Category from "./components/category/category.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Card />
        <Category />
      </div>
    </div>
  );
}

export default App;
