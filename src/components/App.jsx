import React, { useState, useEffect } from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import About from './About';

function App() {
  // useState hook to pass callback down to child component
  const [user, setUser] = useState('');
  const [cookie, setCookie] = useState('');
  const navigate = useNavigate();
  function funcSetUser(str) {
    setUser(str);
  }
  function funcSetCookie(str) {
    setCookie(str);
  }
  //
  useEffect(() => {
    console.log('this is the cookie', Cookies.get('grafid'));
    if (Cookies.get('grafid')) {
      setCookie(Cookies.get('grafid'));
      console.log('app useeffect');
      navigate('/dashboard', { user: user, cookie: cookie });
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login setUser={funcSetUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={
            <Dashboard
              user={user}
              cookie={cookie}
              setUser={funcSetUser}
              setCookie={funcSetCookie}
            />
          }
        />
        <Route path='/' element={<Login setUser={funcSetUser} />} />
      </Routes>
    </>
  );
}

export default App;
