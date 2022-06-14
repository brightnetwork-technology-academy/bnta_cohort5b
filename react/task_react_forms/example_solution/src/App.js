import './App.css';
import Header from './components/Header';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeList from './components/RecipeList';
import { useState } from 'react';

function App() {

  let initialCakes = [
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
  ]

  const [cakes, setCakes] = useState(initialCakes);
  // state storing our initial cakes list. This is added to by our form

  const [filteredCakes, setfilteredCakes] = useState();
  // separate state for handling the filtered cakes
  // Displaying of this or the state above is handled by a ternary in the `return` function below

  function filterCakes(searchTerm) {
    console.log("SEARCH TERM", searchTerm);
    const filtered = cakes.filter(cake => cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase()));
    setfilteredCakes(filtered);
  }
  // A function which filters the `cakes` state by a search term and sets `filteredCakes` to the result

  return (
    <div className="App overall__container">
      <Header filterCakes={filterCakes}/>
      <RecipeList cakes={filteredCakes ? filteredCakes : cakes}/>
      <NewRecipeForm cakes={cakes} setCakes={setCakes}/>
    </div>
  );
}

export default App;
