import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Router from './components/Router';
import Navbar from './components/navbar/Navbar';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Router />
    </div>
    <div className="fixed-action-btn">
      <Link to="/addBlog" className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  </div>
)

export default App;
