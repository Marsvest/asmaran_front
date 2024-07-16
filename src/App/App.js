import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from '../Registration/Registartion';
import Login from '../Login/Login'
import Main from '../Main/Main'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
