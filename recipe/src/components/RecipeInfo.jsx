import { useState } from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
    const [item,setItem]=useState()
    const { MealId } = useParams();
            if(MealId!=" ")
            {
                    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res=>res.json()).then(data=>{
                        setItem(data.meal[0])
                    })
            }
    return (
        <>
            {
                (!item)?"":(<>
                <div className="content"><img src={item.strMealThumb}/>
                <div className="inner">


                    <h1>{item.strMeal}</h1>
                    <h2>{item.strArea} FOOD</h2>
                    <h3>Catogory {item.strCategory}</h3>
                </div>
                </div>
                <div className="res">
                    <div className="inge">
                        <h2>Ingredients</h2><br/>
                        <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                        <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                        <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                        <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                        <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                        <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                        <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                        <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
                    </div>
                    <div className="inst"><br/>

                        <h2>Instruction</h2>
                        <h4>{item.strInstructions}</h4>
                    </div>
                    
                    
                    
                    
                    </div>
               
                </>
                )
            }
           
        </>
    );
    
}

export default RecipeInfo;
