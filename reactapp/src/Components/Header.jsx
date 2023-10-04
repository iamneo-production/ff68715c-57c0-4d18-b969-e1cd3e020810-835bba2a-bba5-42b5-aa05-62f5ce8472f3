// Header.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, selectUser } from '../Redux/userSlice';
import '../Assets/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const email = user.email;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (isSidebarOpen && !event.target.closest('.sidebar')) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="header">
      <div className="logo">
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>&nbsp;&nbsp;
        <h2>E-mart</h2>
      </div>
      <div className="actions">
        <li onClick={() => navigate('/')}>Home</li>&nbsp;&nbsp;&nbsp;
       
        {email ? (
          <>
            <p>Welcome, {email}</p>
            <IconButton onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Link to="/login">
              <IconButton>
                <LoginIcon />
              </IconButton>
            </Link>
          </>
        )}
        <Link to="/cart">
          <IconButton style={{ color: '#black' }}>
            <ShoppingCartIcon />
          </IconButton>
        </Link>

      </div>
      {isSidebarOpen && <Sidebar />} {/* Conditionally render the Sidebar */}
    </div>
  );
}

export default Header;
