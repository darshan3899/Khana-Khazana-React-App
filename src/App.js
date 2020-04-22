import React, { useState, useEffect } from "react";
import Recipie from "./Recipie";

import "./App.css";

function App() {
  const APP_ID = "34976257";
  const APP_KEY = "41b62da3eabc60ff718d838a415b691c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potato");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="searchForm">
        <input
          type="text"
          className="searchBar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
      <div className="recipies">
        {recipes.map((recipe, index) => (
          <Recipie
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
