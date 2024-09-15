// Main Notecard Maker Application 


// Dependencies 
import react, { useState } from 'react';


// CSS Dependencies 
import { Box, Typography } from '@mui/material';


// Components & Necessary Files 
import Home from './Home';
import Flashcard from './Flashcard';
import Navbar from './Navbar';
import '../Static/App.css';


// Notecrad Maker Application 
function App() {


  return (
    <div 
      className = "App"
      style = {{
        backgroundColor: '#00695f'
      }}
    >
      <Navbar />
      <Home /> 

    </div>
  );
}

export default App;
