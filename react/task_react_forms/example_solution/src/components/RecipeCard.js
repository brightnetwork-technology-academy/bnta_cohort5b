// This component maps the information for each recipe, returning each as an article containing said information

const RecipeCard = ({ name, ingredients, rating }) => {

  // const mappedIngredients = ingredients.map((ingredient, id) => {return <li key={id} className="recipeCard__li">{ingredient}</li>})

  return (
    <article className="recipeCard">

        <h2 className="recipeCard__title">{name}</h2>
        <label htmlFor="recipeCard__ingredients">Ingredients:</label>
        <ul className="recipeCard__ingredients">
          {ingredients.map((ingredient, id) => (
            <li key={id} className="recipeCard__li">{ingredient}</li>
          ))}
        </ul>
        <h4>Rating: {rating}/5</h4>

    </article>
  )
}

export default RecipeCard