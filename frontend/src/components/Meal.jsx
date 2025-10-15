import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item,setItem]=useState()
    const [show,setShow]=useState(false)
    const [search,setSearch]=useState("")
    
//     useEffect(() => {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             if (data.meals) {
//                 console.log(data.meals);
//                 setItem(data.meals);
//                 setShow(true);
//             } else {
//                 setItem([]);    
//                 setShow(false);  
//             }
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//             setShow(false);      
//         });
// }, [url]);
useEffect(() => {
    async function fetchData() {
        try {
            let mealDbRecipes = [];
            let sharedRecipes = [];

            // If searching by text
            if (url.includes("search.php?s=")) {
                const searchTerm = url.split("=")[1];
                const res = await fetch(url);
                const data = await res.json();
                mealDbRecipes = data.meals || [];

                const res2 = await fetch(`http://localhost:7000/shared-recipes?s=${searchTerm}`);
                sharedRecipes = await res2.json();
            }
            // If filtering by first letter
            else if (url.includes("search.php?f=")) {
                const firstLetter = url.split("=")[1];
                const res = await fetch(url);
                const data = await res.json();
                mealDbRecipes = data.meals || [];

                const res2 = await fetch(`http://localhost:7000/shared-recipes?f=${firstLetter}`);
                sharedRecipes = await res2.json();
            }

            // Map shared recipes into MealDB-like format
            const formattedShared = sharedRecipes.map(r => {
                let formatted = {
                    idMeal: r._id,
                    strMeal: r.title,
                    strMealThumb: r.imageUrl,
                    strCategory: r.category,
                    strArea: "User Recipe",
                    strInstructions: r.description || "No instructions available",
                };

                r.ingredients.forEach((ing, idx) => {
                    formatted[`strIngredient${idx+1}`] = ing;
                    formatted[`strMeasure${idx+1}`] = "";
                });

                return formatted;
            });

            setItem([...mealDbRecipes, ...formattedShared]);
            setShow(true);
        } catch (error) {
            console.error("Fetch error:", error);
            setShow(false);
        }
    }
    fetchData();
}, [url]);


    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
    const searchRecipe = (evt) => {
        if (evt.key === "Enter") {
          setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
          
        }
      };
      
    return (
      <>
        <div className="main">
          <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>"Welcome to a world of endless flavors and delightful discoveries. Let your culinary journey begin!"</h4>
          </div>
          <div className="search">
          <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)}  onKeyDown={e => { if (e.key === 'Enter') searchRecipe(e) ; }} />
         
          </div>
        <div className="cointain">  
  {item && item.length > 0 ? (
    <MealItem data={item} />
  ) : (
    <h2>Sorry for the inconvenience.  
  The recipe you searched for is not available at the moment,  
  or it may be due to a spelling mistake.  
  Please check the spelling and try again.</h2>
  )}
</div>


          <div className="indexCon">


            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
          </div>
        </div>
      </>
    );
  };
  
  export default Meal;
  