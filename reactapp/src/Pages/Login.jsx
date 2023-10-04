import React, { useState } from 'react';
import '../Assets/Login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errors, setError] = useState({});
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = {};
    
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Dispatch the email here or perform your authentication logic
      dispatch(login(email));
      alert("Login successful");
      nav('/');
    }
  }

  return (
    <div className='gugan'>
    <div className="login-box2">
      <form className="main2" onSubmit={handleSubmit}>
        <center><h1>Log in</h1></center>
        <br />
        <input
          type="email" 
          placeholder='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <h6>{errors.email && <span>{errors.email}</span>}</h6>
        
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <h6>{errors.password && <span>{errors.password}</span>}</h6>
        <button type='submit' className='but' >Submit</button>
        <br />
        <br/>
     
        <Link to="/register">
          <button type='submit' className='but'>
            Create an account
          </button>
        </Link>
      </form>
    </div>
    </div>
  );
}

export default Login;
