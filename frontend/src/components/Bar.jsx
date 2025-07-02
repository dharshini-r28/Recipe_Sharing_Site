// // // Bar.jsx
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Bar = () => {
// //   return (
// //     <div className="nav">
// //       <Link to="/Entier">Home</Link>
// //       <Link to="/Recipe">Recipes</Link>
// //       <Link to="/Create">Create Recipe</Link>
// //       <Link to="/My_recipe">My Recipe</Link>
// //       <Link to="/About">About Us</Link>
// //       <Link to="/">Log out</Link>
// //     </div>
// //   );
// // };

// // export default Bar;
// // Bar.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Bar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear login state
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("username");

//     // Redirect to login page
//     navigate("/");
//   };

//   return (
//     <div className="nav">
//       <Link to="/Entier">Home</Link>
//       <Link to="/Recipe">Recipes</Link>
//       <Link to="/Create">Create Recipe</Link>
//       <Link to="/My_recipe">My Recipe</Link>
//       <Link to="/About">About Us</Link>
      
     
//       <button onClick={handleLogout} className="logout-button">Log out</button>
//     </div>
//   );
// };

// export default Bar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Bar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="nav">
      <Link to="/Entier">Home</Link>
      <Link to="/Recipe">Recipes</Link>
      <Link to="/Create">Create Recipe</Link>
      <Link to="/My_recipe">My Recipe</Link>
      {/* <Link to="/About">About Us</Link> */}

      {/* Show logout button only if logged in */}
      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-button">
          Log out
        </button>
      )}
    </div>
  );
};

export default Bar;

