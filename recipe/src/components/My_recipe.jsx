import React, { useEffect, useState } from 'react';

function My_recipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    async function getRecipes() {
        try {
            const response = await fetch('https://recipe-dm8h.onrender.com/getrecipe');
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    return (
        <div className="rfull">
            <div className='Header'>
        <h1>My Recipes</h1></div>
        <div className="bg-image">
        <img src="img12.jpg" alt="Background Image" />
    </div>
        <div className="wrapper1">
            {recipes.map((recipe, index) => (
                <div className="recipe-card" key={index}>
                    <img src='img33.jpg'></img>
                  <div className="recipetit">  <h1>{recipe.title}</h1></div>
                  <div className="ingede"> <p>Ingredients: {recipe.ingredients.join(', ')}</p></div>
                   <div className="categoryR"> <p>Category: {recipe.category}</p></div>
                   {recipe.description && <p>Description: {recipe.description}</p>}
                </div>
            ))}
        </div>
        </div>
    );
}


export default My_recipe;
