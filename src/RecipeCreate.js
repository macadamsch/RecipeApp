import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };
  const [formData, setFormData] = useState( initialFormState );
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default
    addRecipe({...formData}); //add new recipe to recipes array
    setFormData({...initialFormState}) //reset the form
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={handleChange} value={formData.name} required />
              </td><td><label htmlFor="cuisine">Cuisine</label>
              <input type="text" name="cuisine" onChange={handleChange} value={formData.cuisine} required />
              </td><td><label htmlFor="photo">Photo</label>
              <input type="url" name="photo" onChange={handleChange} value={formData.photo} required />
              </td><td><label htmlFor="ingredients">Ingredients</label>
              <textarea name="ingredients" onChange={handleChange} value={formData.ingredients} required />
              </td><td><label htmlFor="preparation">Preparation</label>
              <textarea name="preparation" onChange={handleChange} value={formData.preparation} required />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
