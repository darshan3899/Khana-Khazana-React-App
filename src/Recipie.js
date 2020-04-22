import React from "react";
const Recipie = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipie">
      <h1 className="title">{title}</h1>
      <img src={image} alt="" className="image" />
      <ol>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories:{calories}</p>
    </div>
  );
};

export default Recipie;
