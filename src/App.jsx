import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
      setIsAuthenticated(false);
  };

  return (

      <Routes>
          <Route path="/Login-UserName/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Login-UserName/home" element={isAuthenticated ? <Home onSignOut={handleSignOut} /> : <Navigate to="/LoginPageReact/signin" />} />
          <Route path="/Login-UserName" element={<Navigate to="/Login-UserName/signin" />} />
      </Routes>
  );
}

export default Appt
