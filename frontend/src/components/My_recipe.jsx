import React, { useEffect, useState } from 'react';

function My_recipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    getRecipes();
}, []);

async function getRecipes() {
    const username = localStorage.getItem("username"); // get logged-in user
    try {
        const response = await fetch('http://localhost:7000/getrecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username }) // send username
        });
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
                    {/* <img src='img33.jpg'></img> */}
                    <img src={recipe.imageUrl} alt="Recipe" className="recipe-image"/>

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
