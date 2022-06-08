import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import axios from 'axios';
// import { message } from 'antd';


import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  // const [token] = useState(localStorage.getItem('token'));
  const [userLogged] = useState(false);

  

  // const userLoggedIn = async () => {
  //   const isValidToken = await axios.get('https://datata-tasks-app.herokuapp.com/api/auth/me', {
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       }
  //   });
  //   console.log(isValidToken);

  //   if (!isValidToken.data.success) {
  //     message.error(isValidToken.data.message);
  //     setUserLogged(false);
  //   } else {
  //     setUserLogged(true);
  //   }
  // };


  return (
    <div className='App'>
      <Header userLogged={userLogged}/>
      <Routes>
        <Route path="/" element={<Welcome myText="Welcome to tasks app" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Welcome myText="You are logged" />} />

        <Route path="*" element={<Welcome myText="Page not found" />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
