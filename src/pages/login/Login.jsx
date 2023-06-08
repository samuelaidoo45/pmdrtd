import React, { useState } from 'react';
import LoginStyle from './Login.module.css';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [showRegistration, setShowRegistration] = useState(false); // State to toggle between login and registration forms
  const [username, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const baseUrl = 'http://127.0.0.1:5000';


  const handleLogin = (event) => {
    event.preventDefault();

    // window.location.href = 'pomodoropal/build/home';
    window.location.assign('pomodoropal/build/home')

    setUrl(baseUrl+'/api/user/login');

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
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      }).then((data)=>{
        // Redirect to the dashboard page if login is successful
        toast.success('Login successful!');

        console.log(data);
        window.location.href = 'pomodoropal/build/dashboard';
      }).catch((error) => {
        console.error(error);
        // Display an error message to the user
        // alert('Login failed. Please try again.');
        toast.error('Login failed. Please try again.');

      });
  };

  const handleToggleForm = () => {
    setShowRegistration(!showRegistration);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    fetch(baseUrl+'/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    }).then((response) => {
        if (response.ok) {
           return response.json();

        } else {
          throw new Error('Login failed');
        }
    }).then((data)=>{
        // console.log(data.message);
        toast.success('Registration successful!');

        //Redirect to the dashboard page if login is successful
        //window.location.href = 'pomodoropal/build/dashboard';
        handleToggleForm();
    }).catch((error) => {
        console.error(error);
        // Display an error message to the user
        toast.error('Registration failed. Please try again.');
        // alert('Register failed. Please try again.');
    });
  }


  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.formContainer}>
        <ToastContainer />
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
          <input
            className={LoginStyle.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button className={LoginStyle.button} type="submit">Login</button>
          <p className={LoginStyle.p}>
            Don't have an account? <a onClick={handleToggleForm} className={LoginStyle.a} >Register here</a>.
          </p>
        </form>

        <form className={`${LoginStyle.registrationForm} ${showRegistration ? '' : LoginStyle.hidden}`} onSubmit={handleRegister}>

          <h1 className={LoginStyle.h1}>Register</h1>

          <label className={LoginStyle.label} htmlFor="name">Name:</label>
          <input 
            className={LoginStyle.input}
            type="test" 
            id="username" 
            name="username" 
            value={username}
            onChange={(event) => setUserName(event.target.value)} 
            required
           />

          <label className={LoginStyle.label} htmlFor="email">Email:</label>
          <input className={LoginStyle.input} type="email" id="email" name="email" value={email}
            onChange={(event) => setEmail(event.target.value)} required />

          <label className={LoginStyle.label} htmlFor="password">Password:</label>
          <input className={LoginStyle.input} type="password" id="password" name="password"  value={password}
            onChange={(event) => setPassword(event.target.value)} required />

          <label className={LoginStyle.label} htmlFor="confirm-password">Confirm Password:</label>
          <input className={LoginStyle.input} type="password" id="confirm-password" value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)} name="confirm-password" required />

          <button className={LoginStyle.button}  type="submit">Register</button>

          <p className={LoginStyle.p}>
            Already have an account? <a onClick={handleToggleForm} className={LoginStyle.a} >Login here</a>.
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
