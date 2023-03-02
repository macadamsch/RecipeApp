import React, { useState } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList />
    </div>
  );
}

export default App;
