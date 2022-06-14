// This component defines the form for adding a new recipe to the list alongside some bespoke functionality related to input value modulation
import { useState } from "react";

const NewRecipeForm = ({cakes, setCakes}) => {

  const [newCake, setNewCake] = useState("");
  const [newIngredients, setNewIngredients] = useState();
  const [newRating, setNewRating] = useState("");

  function handleSubmit(e) {
    // Needed so the page doesn't refresh
    e.preventDefault();
    let newCakeInput = {cakeName: newCake, ingredients: newIngredients, rating: newRating};
    setCakes([...cakes, newCakeInput]);
  }

  // It's worth drawing attention to the onChange function for the ingredients input field -
  // The logic here handles the input of comma-separated values from within the field, turning it into an array before being stored in state

  return (
    <section className="newCakeForm container">
      <h2>New Cake Form:</h2>
      <form className="newCakeForm__form" onSubmit={handleSubmit}>

          <label className="newCakeForm__label" htmlFor="nameField">Cake Name:</label>
          <input type="text" className="newCakeForm__input" id="nameField" placeholder="Cake Name" required
          onChange={(e) => {setNewCake(e.target.value)}}/>

          <label className="newCakeForm__label" htmlFor="ingredientField">Cake Ingredients: (comma-separated)</label>
          <input type="text" className="newCakeForm__input" id="ingredientField" placeholder="Ingredients" required

            onChange={(e) => {
              let inputted__ingredients = e.target.value.split(",");
              console.log("INITIAL", inputted__ingredients);
              inputted__ingredients = inputted__ingredients.map(ingredient => {return ingredient.trim()});
              setNewIngredients(inputted__ingredients);
            }}
          />

          <label className="newCakeForm__label" htmlFor="ratingField">Cake Rating:</label>
          <input type="number" min="1" max="5" className="newCakeForm__input" id="ratingField" placeholder="rating" required
          onChange={(e) => {setNewRating(e.target.value)}} />

          <input className="newCakeForm__submit" type="submit" value="Submit" id="submitButton" />
      </form>
    </section>
  )
}

export default NewRecipeForm