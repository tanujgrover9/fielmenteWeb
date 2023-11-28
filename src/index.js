import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Hero from './Hero';
import App from './App';
import reportWebVitals from './reportWebVitals';

function mainPage(){
  return(
    <div>


<Header/>
      
      
      <Hero/>
    </div>
      
    
  )
}
ReactDOM.render(mainPage(),document.getElementById("root"));
