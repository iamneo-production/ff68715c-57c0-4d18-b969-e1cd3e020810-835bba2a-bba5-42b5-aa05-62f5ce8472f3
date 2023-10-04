import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Register.css';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState({});
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Dispatch the email here or perform your registration logic
      dispatch(login(email));
      alert('Registration successful');
      nav('/');
    }
  }

  // Add a CSS class to the body and .login-box1 when errors are present
  if (Object.keys(errors).length > 0) {
    document.body.classList.add('error-body');
  } else {
    document.body.classList.remove('error-body');
  }

  return (
    <div className='gugan'>
      <div className={`login-box1 ${Object.keys(errors).length > 0 ? 'error' : ''}`}>
        <form className="main1" onSubmit={handleSubmit}>
          <center>
            <h1>Sign Up</h1>
          </center>

          <br />

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h6>{errors.firstName && <span>{errors.firstName}</span>}</h6>
          <br />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <h6>{errors.lastName && <span>{errors.lastName}</span>}</h6>
          <br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6>{errors.email && <span>{errors.email}</span>}</h6>
          <br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h6>{errors.password && <span>{errors.password}</span>}</h6>
          <br />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <h6>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h6>
          <br />

          <button type="submit" className="but">
             Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register;
