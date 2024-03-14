import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import My_recipe from './My_recipe';

function Add_recipe() {

    useEffect(() => {
        getExpenseDetails(); // Trigger expense details fetching when component mounts
    }, []);

    async function handleAddNewEntry() {
        const titleInput = document.getElementById('title');
        const ingredientsInput = document.getElementById('ingredients');
        const categoryInput = document.querySelector('input[name="drone"]:checked');
        const descriptionInput = document.getElementById('description');

        const title = titleInput.value;
        const ingredients = ingredientsInput.value;
        const category = categoryInput.value;
        const description = descriptionInput.value;

        try {
            const response = await fetch('https://recipe-dm8h.onrender.com/addrecipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    ingredients,
                    category,
                    description
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    }

    async function getExpenseDetails() {
        try {
            const response = await fetch('https://recipe-dm8h.onrender.com/addrecipe');
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
                <h2>Category</h2>
                <fieldset>
                    <legend><h3>Select your category :</h3></legend><br></br>
                    <div>
                        <input type="radio" id="veg" name="drone" value="veg" checked />
                        <label htmlFor="veg">Veg</label>
                    </div><br></br>
                    <div>
                        <input type="radio" id="Non-veg" name="drone" value="Non-veg" />
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