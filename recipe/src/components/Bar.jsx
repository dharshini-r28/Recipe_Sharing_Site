// Bar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Bar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/Recipe">Recipes</Link>
      <Link to="/Create">Create Recipe</Link>
      <Link to="/About">About Us</Link>
    </div>
  );
};

export default Bar;
