import React, { useState } from 'react';
import LoginStyle from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    window.location.href = '/dashboard';
    return;

    // alert("Hello World");return;

    // Post user input data to the server
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // Redirect to the dashboard page if login is successful
    //       window.location.href = '/dashboard';
    //     } else {
    //       throw new Error('Login failed');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Display an error message to the user
    //     alert('Login failed. Please try again.');
    //   });
  };

  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.formContainer}>
        <form className={LoginStyle.loginForm} onSubmit={handleLogin}>
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
            {/* Don't have an account? <a className={LoginStyle.a} href="#">Register here</a>. */}
          </p>
        </form>
        <form className={LoginStyle.registrationForm}>
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
            {/* Already have an account? <a className={LoginStyle.a} href="#">Login here</a>. */}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
