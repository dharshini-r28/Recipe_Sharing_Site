import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Sign() {
    const navigate = useNavigate();

    async function handleAddNewEntry(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const name = document.getElementById('name').value;
        const emailid = document.getElementById('emailid').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('age').value;
        const country = document.getElementById('country').value;
        const phoneno = document.getElementById('phone').value;

        try {
            const response = await fetch('http://localhost:7000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    emailid,
                    password,
                    gender,
                    phoneno,
                    country
                })
            });

            const data = await response.json();

            if (data.success === 'success') {
                navigate('/Entier'); 
            } else if (data.message === "user existed") {
                alert("User already exists. Try logging in.");
            } else {
                alert("Registration failed. Try again.");
            }
        } catch (error) {
            console.error('Error adding entry:', error);
            alert("Server error. Try again later.");
        }
    }

    return (
        <div className="container">
            <div className="bg-image">
                <img src="img8.jpg" alt="Background" />
            </div>
            <div className="forms-containers">
                <div className="signin-signup">
                    <form className="sign-up-form" onSubmit={handleAddNewEntry}>
                        <h2 className="title1">Sign up</h2>

                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" id="name" required />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" id="emailid" required />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" id="password" required />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" placeholder="Age" id="age" required />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="text" placeholder="Country" id="country" required />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="number" placeholder="Phone No" id="phone" required />
                        </div>

                        <button type="submit" className="btn">Sign up</button>
                         <p className="redirect-text">
                            Don't have an account? <Link to="/">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign;
