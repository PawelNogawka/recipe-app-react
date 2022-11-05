import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";
import Recipe from './components/Recipe'

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    console.log(recipes)

  const APP_ID = "500be439";
  const APP_KEY = "65d7c2e2855c1843b69bb429c77fcc80";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getData() {
    if (query !== "") {
      const result = await Axios.get(url);
      setRecipes(result.data.hits)
      setAlert("")
      setQuery("")
      

      console.log(recipes);
    } else {
      setAlert("fill the form!");
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    getData();
  }

  function onChange(e){
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <h1 className="main-heading">food searching app</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          onChange={onChange}
          className="search-input"
          type="text"
          placeholder="Search food..."
          value={query}
        />
        <button className="search-btn btn" type="submit">
          search
        </button>
      </form>
      <div className="recipes-container">
        {recipes.length > 0 && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
