import './App.css';
import './index.css';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { login, logout } from '../store/authSlice'; 
import authService from '../appwrite/auth';
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentuser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
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
