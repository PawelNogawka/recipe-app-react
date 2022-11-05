import { v4 as uuidv4 } from "uuid";

function Details({ ingredients }) {
  return ingredients.map((ingredient) => {
    return (
      <ul key={uuidv4()} className="recipe-details-list">
        <li className="recipe-list-item">{ingredient.text}</li>
        <li className="recipe-list-item">
          Weight - {ingredient.weight.toFixed(2)}
        </li>
      </ul>
    );
  });
}

export default Details;
