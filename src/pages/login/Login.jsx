import React, { useState } from 'react';
import LoginStyle from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [showRegistration, setShowRegistration] = useState(false); // State to toggle between login and registration forms


  const handleLogin = (event) => {
    event.preventDefault();

    setUrl('http://127.0.0.1:5000/api/user/login');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        // console.log(response.body);
        if (response.ok) {
          // Redirect to the dashboard page if login is successful
          window.location.href = 'pomodoropal/build/dashboard';
        } else {
          throw new Error('Login failed');
        }
      })
      .catch((error) => {
        console.error(error);
        // Display an error message to the user
        alert('Login failed. Please try again.');
      });
  };

  const handleToggleForm = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.formContainer}>
        <form className={`${LoginStyle.loginForm} ${showRegistration ? LoginStyle.hidden : ''}`} onSubmit={handleLogin}>
          <h1 className={LoginStyle.h1}>Login</h1>
          <label className={LoginStyle.label} htmlFor="email">Email:</label>
          <input className={LoginStyle.input}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input className={LoginStyle.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button className={LoginStyle.button} type="submit">Login</button>
          <p className={LoginStyle.p}>
            Don't have an account? <Link onClick={handleToggleForm} className={LoginStyle.a} to="#">Register here</Link>.
          </p>
        </form>
        <form className={`${LoginStyle.registrationForm} ${showRegistration ? '' : LoginStyle.hidden}`}>
          <h1 className={LoginStyle.h1}>Register</h1>
          <label className={LoginStyle.label} htmlFor="name">Name:</label>
          <input className={LoginStyle.input} type="text" id="name" name="name" required />
          <label className={LoginStyle.label} htmlFor="email">Email:</label>
          <input className={LoginStyle.input} type="email" id="email" name="email" required />
          <label className={LoginStyle.label} htmlFor="password">Password:</label>
          <input className={LoginStyle.input} type="password" id="password" name="password" required />
          <label className={LoginStyle.label} htmlFor="confirm-password">Confirm Password:</label>
          <input className={LoginStyle.input} type="password" id="confirm-password" name="confirm-password" required />
          <button className={LoginStyle.button} type="submit">Register</button>
          <p className={LoginStyle.p}>
            Already have an account? <Link onClick={handleToggleForm} className={LoginStyle.a} to="#">Login here</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
