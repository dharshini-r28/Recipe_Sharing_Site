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
      <Link to="/Suggestions">Suggestions</Link> {/* ✅ new page link */}

      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-button">
          Log out
        </button>
      )}
    </div>
  );
};

export default Bar;
