import React from "react";
import {useState} from 'react';
import RecipeData from "./RecipeData";
import RecipeCreate from "./RecipeCreate";

function RecipeList() {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const [recipes, setRecipes] = useState(RecipeData);
  
  function addRecipe(newRecipe){
    setRecipes([
        ...recipes,
        newRecipe
    ])
  };

  const deleteRecipe = (recipeToDelete) => {
    setRecipes(recipes.filter(recipe => recipe !== recipeToDelete))
  };

  return (
    <main>
      <table>
        <thead>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </thead>
      </table>
      <div className="recipe-list">
        <table>
          {recipes.map(recipe => (
          <tbody>
            <tr>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img className="scale-down" src={recipe.photo}></img></td>
              <td className="content_td"><p>{(recipe.ingredients)}</p></td>
              <td className="content_td"><p>{(recipe.preparation)}</p></td>
              <td><button name="delete" onClick={()=>{deleteRecipe(recipe)}}>Delete</button></td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
      <RecipeCreate addRecipe={addRecipe} />

    </main>
  );
}

export default RecipeList;
