# REACT FORMS LAB

## Lab Overview

Create a basic React app which displays provided recipes on the front-end by use of the `.map()` method for objects, by first housing the data in state. Further, be able to add a new recipe to this list using a HTML form. This form makes further use of state.


## Aims

- To provide practice of building a **FORM** in React
- To provide more practice with passing **PROPS** in React
- To provide more practice with using the **USESTATE** HOOK
- To provide practice of **MAPPING** content (the provided list & json) to JSX components


## Lab Steps

Please follow through these initial steps sequentially. The three extension tasks can be attempted in any order.

1. Create a new React app `create-react-app {appName}`
2. Using the data set (below), save this list into state using the `useState` hook (remember to import!)
3. Create a constant which equals this data mapped to multiple JSX objects (such as a series of `<p>` elements). Make use of only one property at first
4. Call this constant within the `return` function to render it on the front-end (remember to use `{}` to denote JavaScript within the `return`!)
5. Abstract this constant out, placing it in it's own component, passing in the initial state from above as a prop
6. Expand out this mapping process to make use of the other two properties (could you make use of another component here?)
7. Create a form component for adding in a new recipe at the bottom of the page
8. Add functionality to your form to manage adding the submitted data to your original state from Step 2 (remember to prevent the default behaviour of the form on-submit so that the page doesn't refresh!)

**Extensions:**

1. Add basic styling to your entire page using CSS. Add in the extra navigation element seen in the wireframe
2. Add in some basic form validation so that the rating can only be the values 1 through 5, and so that an empty form cannot be submitted
3. Make your search bar within the header section functional (filtering the recipes by name). Ensure that the filter is case-insensitive


## Wireframe Design

Below is a simple wireframe design that you can optionally use. Please note that this exercise is focussed primarily on the building of a functioning form and the mapping of content, not CSS.

<img src="./react_form_wireframe.png" alt="Example wireframe including a navigation bar with title, three anchors and a search bar. Six recipe cards are shown below in their own section followed by a form which takes in a recipe name, set of ingredients and rating"/>


## Data Set

Below is the initial data state for this exercise. Start by saving this data set as a separate constant before you place it into state using `useState`.

```
[
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
```