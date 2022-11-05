import { useState } from "react";

import Details from "./Details";

function Recipe({ recipe }) {
  const [show, setShow] = useState(false);

  const { label, image, dishType, calories, totalWeight, url, ingredients } =
    recipe.recipe;
  return (
    <div className="recipe">
      <img src={image} alt={label} className="recipe-img" />
      <h2 className="recipe-name">{label}</h2>
      <div className="recipe-data-container">
        <div className="recipe-data">
          <h3 className="recipe-data-label">type -</h3>
          <p className="recipe-data-info">{dishType}</p>
        </div>
        <div className="recipe-data">
          <h3 className="recipe-data-label">weight -</h3>
          <p className="recipe-data-info">{totalWeight.toFixed()}</p>
        </div>
        <div className="recipe-data">
          <h3 className="recipe-data-label">calories -</h3>
          <p className="recipe-data-info">{calories.toFixed()}</p>
        </div>
        <div className="recipe-data">
          <h3 className="recipe-data-label">website -</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="recipe-data-info"
          >
            visit website
          </a>
        </div>
      </div>
      <button onClick={() => setShow(!show)} className="recipe-btn btn">
        ingredients
      </button>

      {show && (
        <div className="recipe-details-container">
          <Details ingredients={ingredients} />
        </div>
      )}
    </div>
  );
}

export default Recipe;
