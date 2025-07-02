import React from 'react';
import { Link } from 'react-router-dom';
import SignUpPage from './SignUpPage.jsx';
import { useEffect } from 'react';

async function handleAddNewEntry() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
      const response = await fetch('http://localhost:7000/login', { // Moved parentheses here
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              password
          })
      }); // Moved parentheses here
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('Error adding entry:', error);
  }
}


async function getExpenseDetails() {
  try {
      const response = await fetch('http://localhost:7000/login');
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('Error fetching expense details:', error);
  }
}



function LoginPage() {
  return (
    <div className="containerl">
      <img src='img5.jpg' width={30}></img>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h1 className="title1">Login your account</h1><br></br><br></br><br></br>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" id='username'/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id='password'/>
            </div>
            <button className='btn solid' onClick={handleAddNewEntry()}>Login</button>
            
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="redirect-text">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;