import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';




function Add_recipe() {
  
    useEffect(() => {
        getRecipeDetails(); 
    }, []);
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState("veg");
    function handleImageUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        setImageUrl(reader.result); 
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}

   async function handleAddNewEntry() {
    const titleInput = document.getElementById('title');
    const ingredientsInput = document.getElementById('ingredients');
    const categoryInput = document.querySelector('input[name="drone"]:checked');
    const descriptionInput = document.getElementById('description');

    const title = titleInput.value;
    const ingredients = ingredientsInput.value;
    const category = categoryInput.value;
    const description = descriptionInput.value;

    const createdBy = localStorage.getItem("username"); 

    try {
        const response = await fetch('http://localhost:7000/addrecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                ingredients: ingredients.split(','), 
                 imageUrl  ,
                category,
                description,
                createdBy
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error adding entry:', error);
    }
}


    async function getRecipeDetails() {
        try {
            const response = await fetch('http://localhost:7000/addrecipe');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching expense details:', error);
        }
    }

    return (
        <>
            <div className="Header"><h1>Add Recipe</h1></div><br></br>
            <div className="Outer">
           
    
      
                <h2>Title :</h2>
                <div className="title">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Title" id="title" />
                </div>

                <h2>Add Ingredients :</h2>
                <div className="title">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Ingredients" id="ingredients" />
                </div>
                <h2>Upload Image</h2>
<div className="title">
    <input type="file" accept="image/*" onChange={handleImageUpload} />
</div>

                <h2>Category</h2>
                <fieldset>
                    <legend><h3>Select your category :</h3></legend><br></br>
                    <div>
                        {/* <input type="radio" id="veg" name="drone" value="veg" checked /> */}
                        <input
  type="radio"
  id="veg"
  name="drone"
  value="veg"
  checked={category === "veg"}
  onChange={(e) => setCategory(e.target.value)}
/>
                        <label htmlFor="veg">Veg</label>
                    </div><br></br>
                    <div>
                        {/* <input type="radio" id="Non-veg" name="drone" value="Non-veg" /> */}
                        <input
  type="radio"
  id="Non-veg"
  name="drone"
  value="Non-veg"
  checked={category === "Non-veg"}
  onChange={(e) => setCategory(e.target.value)}
/>
                        <label htmlFor="Non-veg">Non-Veg</label>
                    </div>
                </fieldset>
                <h2>Description</h2><br></br>
                <div className="txt">
                <textarea rows="8" cols="50" id="description" placeholder='What are the steps ?'></textarea>
                </div>
                <br></br>
                <i className="fas fa-user"></i>
                <Link to="/My_recipe"><button className="add-btn" onClick={handleAddNewEntry}>Add Your Recipe</button></Link>
                </div>
             <div className="bg-image">
             <img src="img11.jpg" alt="Background Image" />
            <div className="containerimg">
                <div className="wrapper">
                    <img src="img4.jpg" alt="img1" />
                    <img src="img33.jpg" alt="img2" />
                    <img src="img2.jpg" alt="img3" />
                    <img src="img3.jpg" alt="img2" />
                    <img src="img4.jpg" alt="img1" />
                    <img src="img33.jpg" alt="img2" />
                    <img src="img2.jpg" alt="img3" />
                    <img src="img3.jpg" alt="img2" />
                </div>
            </div>
            </div>
            
        </>
    );
}

export default Add_recipe;