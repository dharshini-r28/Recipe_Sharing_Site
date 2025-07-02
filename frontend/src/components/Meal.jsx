import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item,setItem]=useState()
    const [show,setShow]=useState(false)
    const [search,setSearch]=useState("")
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json()) 
    //         .then(data => {
    //             console.log(data.meals);
    //             setItem(data.meals);
    //             setShow(true)
    //         })
           
    // }, [url]);
    useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.meals) {
                console.log(data.meals);
                setItem(data.meals);
                setShow(true);
            } else {
                setItem([]);    
                setShow(false);  
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            setShow(false);      
        });
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
          <MealItem/>
          {
            show?<MealItem data={item}/>:  "Not Found"
          }
          
        
          </div>
          <div className="indexCon">


            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
          </div>
        </div>
      </>
    );
  };
  
  export default Meal;
  