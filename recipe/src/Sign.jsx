import React, { useEffect } from 'react';
import Login from './components/Login';
import { Link } from 'react-router-dom';


function Sign() {
     useEffect(() => {
        getExpenseDetails(); // Trigger expense details fetching when component mounts
    }, []);

    async function handleAddNewEntry() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('emailid');
        const passwordInput = document.getElementById('password');
        const ageInput = document.getElementById('age');
        const countryInput = document.getElementById('country');
        const phonenoInput = document.getElementById('phone');
    
        const name = nameInput.value;
        const emailid = emailInput.value
        const password = passwordInput.value;
        const age=ageInput .value;
        const  country=countryInput.value
        const phone=phonenoInput.value

        try {
            const response = await fetch('https://recipe-dm8h.onrender.com/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    emailid,
                    password,
                    age,
                    country,
                    phone,
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
            const response = await fetch('https://recipe-dm8h.onrender.com/add');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching expense details:', error);
        }
    }

   

    return (
        <>
            <div className="container">
            <div className="bg-image">
        <img src="img8.jpg" alt="Background Image" />
    </div>
                <div className="forms-containers">
                    <div className="signin-signup">
                        <form action="#" className="sign-up-form">
                            <h2 className="title1">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" id="name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" id="emailid"/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" id="password" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="text" placeholder="Age" id="age" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="text" placeholder="Country" id="country" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="number" placeholder="PhoneNo" id="phone" />
                            </div>
                            
                            <Link to='/Entier'> <input type="submit" className="btn" value="Sign up" onClick={handleAddNewEntry} /></Link>

                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign;