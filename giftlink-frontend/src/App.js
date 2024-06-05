/* jshint esversion: 8 */
import React from 'react';
// eslint-disable-next-line
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import SearchPage from './components/SearchPage/SearchPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
function App() {
  // eslint-disable-next-line
  const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
          <Route path="/app/profile" element={<Profile/>} />
          <Route path="/app/search" element={<SearchPage/>} />
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
        </Routes>
        </>
  );
}
export default App;
