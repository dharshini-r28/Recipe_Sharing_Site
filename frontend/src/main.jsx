// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import About from './components/About.jsx'
// import Recipe from './components/Recipe.jsx'
// import Create from './components/Create.jsx'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Entier from './components/Entier.jsx'
// import RecipeInfo from './components/RecipeInfo.jsx'
// import My_recipe from './components/My_recipe.jsx'
// import Login from './components/Login.jsx'

// import Sign from './Sign.jsx'
// const router=createBrowserRouter([
//   {
//     path :"/",
//     element:<App/>,
// children:[
// {
//   path :"/",
//   element:<Login/>,
// },
// {
//   path:'/signup',
//   element:<Sign/>
// },
// {
//   path:'/Entier',
//   element:<Entier/>
// },
// {
//   path:"/Recipe",
//   element:<Recipe/>,
// },
// {
//   path:"/Create",
//   element:<Create/>,
// },
// {
//   path:"/About",
//   element:<About/>,
// },
// {
// path:"/:MealId",
// element:<RecipeInfo/>
// },

// {
//   path:"/My_recipe" ,
//   element:<My_recipe /> 
// }
// ]
// }

  
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <RouterProvider router={router}/>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './components/About.jsx';
import Recipe from './components/Recipe.jsx';
import Create from './components/Create.jsx';
import Entier from './components/Entier.jsx';
import RecipeInfo from './components/RecipeInfo.jsx';
import My_recipe from './components/My_recipe.jsx';
import Login from './components/Login.jsx';
import Sign from './Sign.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Sign />,
      },
      {
        path: "/Entier",
        element: (
          <ProtectedRoute>
            <Entier />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Recipe",
        element: (
          <ProtectedRoute>
            <Recipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Create",
        element: (
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        ),
      },
      {
        path: "/About",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/My_recipe",
        element: (
          <ProtectedRoute>
            <My_recipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/:MealId",
        element: (
          <ProtectedRoute>
            <RecipeInfo />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
