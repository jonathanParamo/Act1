import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Usuarios from './components/Users';
import UserList from './components/UserList';
import UsersCard from './components/UsersCard';
import CPlanet from './components/CPlanet';
import Torus from './components/Torus'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<CPlanet />} />
        <Route path='/hocs' element={<Usuarios />} />
        <Route path='/users' element={<UsersCard />} />
      </Routes>
    </Router>
  );
}

export default App;

