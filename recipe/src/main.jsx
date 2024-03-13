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
const router=createBrowserRouter([
  {
    path :"/",
    element:<App/>,
children:[
{
  path :"/",
  element:<Entier/>,
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
path:"/idMeal",
element:<RecipeInfo/>
}
]
}

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
)
