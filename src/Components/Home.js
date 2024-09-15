// Home Component Implementation 


// Dependencies 
import React, { useState } from 'react';


// CSS Dependencies 


// Components & Necessary Files 
import FlashcardBoard from './FlashcardBoard';
import Flashcard from './Flashcard';


// Home Component 
function Home() {


    return( 
        <div
            className = 'home-container'
            style = {{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10rem',
                alignItems: 'center'
            }}
        >
        <FlashcardBoard /> 

        </div>
    )
}

export default Home;