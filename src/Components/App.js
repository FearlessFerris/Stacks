// Main Notecard Maker Application 


// Dependencies 
import react, { useState } from 'react';
import { Box, Typography } from '@mui/material';


// Components & Necessary Files 
import Navbar from './Navbar';
import '../App.css';


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
      {/* <Typography
        variant = 'h2'
        sx = {{ 
          display: 'flex',
          justifyContent: 'center',
          marginTop: '6rem'
        }}
      >
        Stacks 
      </Typography> */}

      
    </div>
  );
}

export default App;
