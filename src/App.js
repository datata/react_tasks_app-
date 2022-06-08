import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  const [userLogged] = useState(false);

  return (
    <div className='App'>
      <Header userLogged={userLogged}/>
      <Routes>
        <Route path="/" element={<Welcome myText="Welcome to tasks app" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Welcome myText="Page not found" />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
