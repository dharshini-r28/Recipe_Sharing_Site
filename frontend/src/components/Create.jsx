// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';




// function Add_recipe() {
  
//     useEffect(() => {
//         // getRecipeDetails(); 
//     }, []);
//     const [imageUrl, setImageUrl] = useState('');
//     const [category, setCategory] = useState("veg");
//     function handleImageUpload(e) {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//         setImageUrl(reader.result); 
//     };
//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }

//    async function handleAddNewEntry() {
//     const titleInput = document.getElementById('title');
//     const ingredientsInput = document.getElementById('ingredients');
//     const categoryInput = document.querySelector('input[name="drone"]:checked');
//     const descriptionInput = document.getElementById('description');

//     const title = titleInput.value.trim();
//     const ingredients = ingredientsInput.value.trim();
//     const category = categoryInput?.value;
//     const description = descriptionInput.value.trim();

//     const createdBy = localStorage.getItem("username"); 

//     // ✅ Validation checks
//     if (!title) {
//         alert("Please fill the title");
//         return;
//     }
//     if (!ingredients) {
//         alert("Please add ingredients");
//         return;
//     }
//     if (!imageUrl) {
//         alert("Please upload an image");
//         return;
//     }
//     if (!description) {
//         alert("Please write a description");
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:7000/addrecipe', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title,
//                 ingredients: ingredients.split(','),
//                 imageUrl,
//                 category,
//                 description,
//                 createdBy
//             })
//         });
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error adding entry:', error);
//     }
// }




//     return (
//         <>
//             <div className="Header"><h1>Add Recipe</h1></div><br></br>
//             <div className="Outer">
           
    
      
//                 <h2>Title :</h2>
//                 <div className="title">
//                     <i className="fas fa-user"></i>
//                     <input type="text" placeholder="Title" id="title" />
//                 </div>

//                 <h2>Add Ingredients :</h2>
//                 <div className="title">
//                     <i className="fas fa-user"></i>
//                     <input type="text" placeholder="Ingredients" id="ingredients" />
//                 </div>
//                 <h2>Upload Image</h2>
// <div className="title">
//     <input type="file" accept="image/*" onChange={handleImageUpload} />
// </div>

//                 <h2>Category</h2>
//                 <fieldset>
//                     <legend><h3>Select your category :</h3></legend><br></br>
//                     <div>
//                         {/* <input type="radio" id="veg" name="drone" value="veg" checked /> */}
//                         <input
//   type="radio"
//   id="veg"
//   name="drone"
//   value="veg"
//   checked={category === "veg"}
//   onChange={(e) => setCategory(e.target.value)}
// />
//                         <label htmlFor="veg">Veg</label>
//                     </div><br></br>
//                     <div>
//                         {/* <input type="radio" id="Non-veg" name="drone" value="Non-veg" /> */}
//                         <input
//   type="radio"
//   id="Non-veg"
//   name="drone"
//   value="Non-veg"
//   checked={category === "Non-veg"}
//   onChange={(e) => setCategory(e.target.value)}
// />
//                         <label htmlFor="Non-veg">Non-Veg</label>
//                     </div>
//                 </fieldset>
//                 <h2>Description</h2><br></br>
//                 <div className="txt">
//                 <textarea rows="8" cols="50" id="description" placeholder='What are the steps ?'></textarea>
//                 </div>
//                 <br></br>
//                 <i className="fas fa-user"></i>
//                 <Link to="/My_recipe"><button className="add-btn" onClick={handleAddNewEntry}>Add Your Recipe</button></Link>
//                 </div>
//              <div className="bg-image">
//              <img src="img11.jpg" alt="Background Image" />
//             <div className="containerimg">
//                 <div className="wrapper">
//                     <img src="img4.jpg" alt="img1" />
//                     <img src="img33.jpg" alt="img2" />
//                     <img src="img2.jpg" alt="img3" />
//                     <img src="img3.jpg" alt="img2" />
//                     <img src="img4.jpg" alt="img1" />
//                     <img src="img33.jpg" alt="img2" />
//                     <img src="img2.jpg" alt="img3" />
//                     <img src="img3.jpg" alt="img2" />
//                 </div>
//             </div>
//             </div>
            
//         </>
//     );
// }

// export default Add_recipe;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add_recipe() {
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState("veg");
    const navigate = useNavigate();

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

        const title = titleInput.value.trim();
        const ingredients = ingredientsInput.value.trim();
        const category = categoryInput?.value;
        const description = descriptionInput.value.trim();
        const createdBy = localStorage.getItem("username"); 

        // ✅ Validation
        if (!title) return alert("Please fill the title");
        if (!ingredients) return alert("Please add ingredients");
        if (!imageUrl) return alert("Please upload an image");
        if (!description) return alert("Please write a description");

        try {
            const response = await fetch('http://localhost:7000/addrecipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    ingredients: ingredients.split(','),
                    imageUrl,
                    category,
                    description,
                    createdBy
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("Recipe added successfully!");
                navigate("/My_recipe"); // ✅ Redirect only after success
            } else {
                alert("Failed to add recipe. Please try again.");
            }
        } catch (error) {
            console.error('Error adding entry:', error);
            alert("Something went wrong while adding the recipe.");
        }
    }

    return (
        <>
            <div className="Header"><h1>Add Recipe</h1></div><br />
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
                    <legend><h3>Select your category :</h3></legend><br />
                    <div>
                        <input
                          type="radio"
                          id="veg"
                          name="drone"
                          value="veg"
                          checked={category === "veg"}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                        <label htmlFor="veg">Veg</label>
                    </div><br />
                    <div>
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

                <h2>Description</h2><br />
                <div className="txt">
                    <textarea rows="8" cols="50" id="description" placeholder='What are the steps ?'></textarea>
                </div>
                <br />

                <i className="fas fa-user"></i>
                {/* ✅ Removed <Link>, added plain button */}
                <button className="add-btn" onClick={handleAddNewEntry}>Add Your Recipe</button>
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
