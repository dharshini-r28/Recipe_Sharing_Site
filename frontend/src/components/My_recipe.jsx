
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'; 

// function My_recipe() {
//     const [recipes, setRecipes] = useState([]);
//     const location = useLocation(); 
//     const newRecipe = location.state?.newRecipe; 

//     useEffect(() => {
//         getRecipes();
//     }, []);

//     async function getRecipes() {
//         const username = localStorage.getItem("username");
//         try {
//             const response = await fetch('http://localhost:7000/getrecipe', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username })
//             });
//             const data = await response.json();

          
//             if (newRecipe) {
//                 setRecipes([newRecipe, ...data]);
//             } else {
//                 setRecipes(data);
//             }
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     }

//     return (
//         <div className="rfull">
//             <div className='Header'>
//                 <h1>My Recipes</h1>
//             </div>
//             <div className="bg-image">
//                 <img src="img12.jpg" alt="Background Image" />
//             </div>
//             <div className="wrapper1">
//                 {recipes.map((recipe, index) => (
//                     <div className="recipe-card" key={index}>
//                         <img src={recipe.imageUrl} alt="Recipe" className="recipe-image" />
//                         <div className="recipetit"><h1>{recipe.title}</h1></div>
//                         <div className="ingede"><p>Ingredients: {recipe.ingredients.join(', ')}</p></div>
//                         <div className="categoryR"><p>Category: {recipe.category}</p></div>
//                         {recipe.description && <p>Description: {recipe.description}</p>}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default My_recipe;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////exit
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'; 

// function My_recipe() {
//     const [recipes, setRecipes] = useState([]);
//     const location = useLocation(); 
//     const newRecipe = location.state?.newRecipe; 
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedRecipe, setSelectedRecipe] = useState(null);

//     useEffect(() => {
//         getRecipes();
//     }, []);

//     async function getRecipes() {
//         const username = localStorage.getItem("username");
//         try {
//             const response = await fetch('http://localhost:7000/getrecipe', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username })
//             });
//             const data = await response.json();
//             if (newRecipe) {
//                 setRecipes([newRecipe, ...data]);
//             } else {
//                 setRecipes(data);
//             }
//         } catch (error) {
//             console.error('Error fetching recipes:', error);
//         }
//     }

//     async function shareRecipe(recipeId) {
//         try {
//             await fetch("http://localhost:7000/share-recipe", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ recipeId })
//             });
//             alert("Recipe shared successfully!");
//             setShowPopup(false);
//         } catch (error) {
//             console.error("Error sharing recipe:", error);
//         }
//     }

//     return (
//         <div className="rfull">
//             <div className='Header'>
//                 <h1>My Recipes</h1>
//             </div>
//             <div className="bg-image">
//                 <img src="img12.jpg" alt="Background" />
//             </div>
//             <div className="wrapper1">
//                 {recipes.map((recipe, index) => (
//                     <div className="recipe-card" key={index}>
//                         <img src={recipe.imageUrl} alt="Recipe" className="recipe-image" />
//                         <div className="recipetit"><h1>{recipe.title}</h1></div>
//                         <div className="ingede"><p>Ingredients: {recipe.ingredients.join(', ')}</p></div>
//                         <div className="categoryR"><p>Category: {recipe.category}</p></div>
//                         {recipe.description && <p>Description: {recipe.description}</p>}
//                         {!recipe.shared && (
//                             <button onClick={() => { setSelectedRecipe(recipe._id); setShowPopup(true); }}>
//                                 Share
//                             </button>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {showPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <p>Do you want to share this recipe with everyone?</p>
//                         <button onClick={() => shareRecipe(selectedRecipe)}>Yes</button>
//                         <button onClick={() => setShowPopup(false)}>No</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default My_recipe;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { FaShareAlt } from "react-icons/fa"; // <-- Share icon

function My_recipe() {
    const [recipes, setRecipes] = useState([]);
    const location = useLocation(); 
    const newRecipe = location.state?.newRecipe; 
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        getRecipes();
    }, []);

    async function getRecipes() {
        const username = localStorage.getItem("username");
        try {
            const response = await fetch('http://localhost:7000/getrecipe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            });
            const data = await response.json();
            if (newRecipe) {
                setRecipes([newRecipe, ...data]);
            } else {
                setRecipes(data);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

   async function shareRecipe(recipeId) {
    try {
        await fetch("http://localhost:7000/share-recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ recipeId })
        });

        // Update state immediately so UI refreshes
        setRecipes(prevRecipes =>
            prevRecipes.map(r =>
                r._id === recipeId ? { ...r, shared: true } : r
            )
        );

        alert("Recipe shared successfully!");
        setShowPopup(false);
    } catch (error) {
        console.error("Error sharing recipe:", error);
    }
}


    return (
        <div className="rfull">
            <div className='Header'>
                <h1>My Recipes</h1>
            </div>
            <div className="bg-image">
                <img src="img12.jpg" alt="Background" />
            </div>
            <div className="wrapper1">
                {recipes.map((recipe, index) => (
                    <div className="recipe-card" key={index}>
                        <img src={recipe.imageUrl} alt="Recipe" className="recipe-image" />
                        <div className="recipetit"><h1>{recipe.title}</h1></div>
                        <div className="ingede"><p>Ingredients: {recipe.ingredients.join(', ')}</p></div>
                        <div className="categoryR"><p>Category: {recipe.category}</p></div>
                        {recipe.description && <p>Description: {recipe.description}</p>}
                        {!recipe.shared && (
                            <button 
                                className="share-btn" 
                                onClick={() => { setSelectedRecipe(recipe._id); setShowPopup(true); }}
                            >
                                <FaShareAlt style={{ marginRight: "6px" }} />
                                Share
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Share Recipe</h2>
                        <p>Do you want to share your recipe publicly? <br/>It will be shown to everyone.</p>
                        <div className="popup-actions">
                            <button className="yes-btn" onClick={() => shareRecipe(selectedRecipe)}>Yes</button>
                            <button className="no-btn" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default My_recipe;
