// This component is the container for the mapped recipes. Note how a variable `mappedCakes` is created first

import RecipeCard from './RecipeCard'

const RecipeList = ({ cakes }) => {

    // console.log("RECIPELIST", cakes)

    let mappedCakes = cakes.map((cake, id) => {
        return <RecipeCard name={cake.cakeName} ingredients={cake.ingredients} rating={cake.rating} key={id} />
    })
    // The `id` and `key={id}` are needed for React to perform more efficiently. You will see warning about the need for distinct key props in the console
    // More info here: https://reactjs.org/docs/lists-and-keys.html
    // Note, you would more commonly house this map within the `render` function itself. Placed here for clarity

  return (
    <section className="recipeList container">
        <div className="recipeCardContainer">
            {mappedCakes}
        </div>
    </section>
  )
}

export default RecipeList