import React from 'react'
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Form from './component/Form';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Pagination from './component/Pagination';

function App() {
  return (
    
    <>
         
     <Router>
      <Link to="/">Home </Link>
      <Link to="sorting-data-react/about">About </Link>
      <Link to="/form">Form </Link>
      
      
      
             <Route exact path="/" component={Home}></Route>
             <Route path="/about" component={About} ></Route>
             <Route path="/form" component={Form}></Route>
             <Route path="/Pagination" component={Pagination}></Route>
        
     </Router>
    </>
    
    
    
  );
}

export default App;
