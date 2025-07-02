// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Sign from '../Sign';

// function Login() {
//     const [list, setList] = useState([]);
//     const [edit, setEdit] = useState(null);

//     useEffect(() => {
//         getExpenseDetails(); // Trigger expense details fetching when component mounts
//     }, []);


    
//     async function handleAddNewEntry() {
//         const nameInput = document.getElementById('name');
//         const passwordInput = document.getElementById('password');

//         const name = nameInput.value;
//         const password = passwordInput.value;

//         try {
//             const response = await fetch('http://localhost:7000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     name,
//                     password
//                 })
//             });
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error('Error adding entry:', error);
//         }
//     }

//     async function getExpenseDetails() {
//         try {
//             const response = await fetch('http://localhost:7000/login');
//             const data = await response.json();
//             setList(data); // Update the list state with the fetched data
//             console.log(data);
//         } catch (error) {
//             console.error('Error fetching expense details:', error);
//         }
//     } 

//     return (
//         <>
//         <div className="containerL">
//         <div className="bg-image">
//         <img src="img1 (1).jpg" alt="Background Image" />
//     </div>
             
//             <div className="forms-container">
//                 <div className="signin-signup">
//                     <form action="#" className="sign-in-form">
//                         <h2 className="title1">Sign in</h2>
//                         <div className="input-field">
//                             <i className="fas fa-user"></i>
//                             <input type="text" placeholder="Username" id="name" />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-lock"></i>
//                             <input type="password" placeholder="Password" id="password" />
//                         </div>

                    

//                       <Link to='/Entier'><input type="submit" className="btn" value="Login" onClick={handleAddNewEntry} /></Link>  
//                         <p className="redirect-text">
//                             Don't have an account? <Link to="/signup">Sign up</Link>
//                         </p>
//                     </form>
//                     </div>
                
//             </div>
//         </div>
//     </>
//     );
// }

// export default Login;
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    // Login handler
    async function handleAddNewEntry(e) {
        e.preventDefault(); 

        const nameInput = document.getElementById('name');
        const passwordInput = document.getElementById('password');

        const name = nameInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('http://localhost:7000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            const data = await response.json();
            console.log(data);

            // If login success
            if (data.success === 'success') {
                // Store login state
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', name);

                // Redirect to homepage
                navigate('/Entier');
            } else {
                alert(data); // error message from backend
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Server error. Please try again later.');
        }
    }

    return (
        <div className="containerL">
            <div className="bg-image">
                <img src="img1 (1).jpg" alt="Background" />
            </div>

            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={handleAddNewEntry}>
                        <h2 className="title1">Sign in</h2>

                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" id="name" required />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" id="password" required />
                        </div>

                        <input type="submit" className="btn" value="Login" />

                        <p className="redirect-text">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
