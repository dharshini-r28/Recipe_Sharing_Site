import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Recipe from './components/Recipe.jsx'
import Create from './components/Create.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Entier from './components/Entier.jsx'
import RecipeInfo from './components/RecipeInfo.jsx'
import My_recipe from './components/My_recipe.jsx'
import Login from './components/Login.jsx'

import Sign from './Sign.jsx'
const router=createBrowserRouter([
  {
    path :"/",
    element:<App/>,
children:[
{
  path :"/",
  element:<Login/>,
},
{
  path:'/signup',
  element:<Sign/>
},
{
  path:'/Entier',
  element:<Entier/>
},
{
  path:"/Recipe",
  element:<Recipe/>,
},
{
  path:"/Create",
  element:<Create/>,
},
{
  path:"/About",
  element:<About/>,
},
{
path:"/:MealId",
element:<RecipeInfo/>
},

{
  path:"/My_recipe" ,
  element:<My_recipe /> 
}
]
}

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
)