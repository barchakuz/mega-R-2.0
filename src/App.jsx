import './App.css';
import './index.css';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { login, logout } from '../store/authSlice'; 
import authService from '../appwrite/auth.js';
import {Header, Footer} from './components/index.js'
import { Outlet } from 'react-router-dom';




function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentuser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
        console.log("User status Set");
        
      } else {
        dispatch(logout());
        console.log("User status UnSet");
      }
    }).finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  ) : null;
}

export default App;
