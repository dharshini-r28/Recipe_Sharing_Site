// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import './styl.css'
// let vId="";
// const RecipeInfo = () => {
//     const { MealId } = useParams(); 
//     const [item, setItem] = useState(null);

//     useEffect(() => {
//         if (MealId) { 
//             fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
//                 .then(res => res.json())
//                 .then(data => setItem(data.meals[0]))
//                 .catch(error => console.error('Error fetching data:', error));
//         }
//     }, [MealId]);
    
    
//     return (
//         <>
//             {
//                 (!item) ? "" : (
//                     <>
//                       <div className="res1"><h1>RECIPE</h1></div>
//                         <div className="content1">
//                             <img src={item.strMealThumb}  alt="" />
//                             <div className="inner">
//                                 <h1>{item.strMeal}</h1>
//                                 <h2>{item.strArea} FOOD</h2>
//                                 <h3>Category: {item.strCategory}</h3>
//                             </div>
//                         </div>
//                         <div className="res">
//                             <div className="instruction">
//                                  <h2>Ingredients</h2><br/>
//                         <h4>1.{item.strIngredient1}:{item.strMeasure1}</h4><br></br>
//                         <h4>{item.strIngredient2}:{item.strMeasure2}</h4><br></br>
//                         <h4>{item.strIngredient3}:{item.strMeasure3}</h4><br></br>
//                         <h4>{item.strIngredient4}:{item.strMeasure4}</h4><br></br>
//                         <h4>{item.strIngredient5}:{item.strMeasure5}</h4><br></br>
//                         <h4>{item.strIngredient6}:{item.strMeasure6}</h4><br></br>
//                         <h4>{item.strIngredient7}:{item.strMeasure7}</h4><br></br>
//                         <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
                               
//                             </div>
//                             <div className="inst"><br />
//                                 <h2>Instructions</h2>
//                                 <h4>{item.strInstructions}</h4>
//                             </div>
                           
//                         </div>
//                     </>
//                 )
//             }
//         </>
//     );
// };
// export default RecipeInfo
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
    const { MealId } = useParams(); 
    const [item, setItem] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                if (MealId.length === 24) {  
                    // Likely a MongoDB ObjectId → fetch from backend
                    const res = await fetch(`http://localhost:7000/recipe/${MealId}`);
                    const data = await res.json();
                    
                    // Convert backend recipe into MealDB format
                    let formatted = {
                        idMeal: data._id,
                        strMeal: data.title,
                        strMealThumb: data.imageUrl,
                        strCategory: data.category,
                        strArea: "User Recipe",
                        strInstructions: data.description,
                    };

                    data.ingredients.forEach((ing, idx) => {
                        formatted[`strIngredient${idx+1}`] = ing;
                        formatted[`strMeasure${idx+1}`] = "";
                    });

                    setItem(formatted);
                } else {
                    // Otherwise → MealDB API
                    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
                    const data = await res.json();
                    setItem(data.meals[0]);
                }
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        }
        fetchRecipe();
    }, [MealId]);

    return (
        <>
            {(!item) ? "" : (
                <>
                    <div className="res1"><h1>RECIPE</h1></div>
                    
                    {/* Top section with image + basic info */}
                    <div className="content1">
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <div className="inner">
                            <h1>{item.strMeal}</h1>
                            <h2>{item.strArea} FOOD</h2>
                            <h3>Category: {item.strCategory}</h3>
                        </div>
                    </div>

                    {/* Ingredients Section */}
                    <div className="res">
                        <div className="instruction">
                            <h2>Ingredients</h2><br/>
                            {Array.from({ length: 20 }, (_, i) => {
                                const ing = item[`strIngredient${i+1}`];
                                const meas = item[`strMeasure${i+1}`];
                                return ing ? <h4 key={i}>{ing} {meas}</h4> : null;
                            })}
                        </div>
                    </div>

                    {/* Instructions Section - clearly separated with margin */}
                    <div className="res instructions-block" style={{ marginTop: "350px" }}>
                        <div className="inst">
                            <h2>Instructions</h2>
                            <p style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
                                {item.strInstructions}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default RecipeInfo;
