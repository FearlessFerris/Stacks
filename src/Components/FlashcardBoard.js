// Flashcard Board Component Implementation 


// Dependencies 
import React, { useState, useEffect } from 'react';


// CSS Dependencies 
import { Box, Backdrop, Card, SpeedDial, SpeedDialIcon, SpeedDialAction, Typography } from '@mui/material';
// import { SpeedDialIcon}
import Grid from '@mui/material/Grid2';


// Components & Necessary Files 
import Flashcard from './Flashcard';


// Flashcard Board Component 
function FlashcardBoard() {

    const [ backdrop, setBackdrop ] = useState( false );

    const handleBackdropOpen = () => {
        setBackdrop( true );
    }

    const handleBackdropClose = () => {
        setBackdrop( false );
    }

    return(
        <div 
            className = 'flashcardboard-container'
        >
            <Grid
                container
                spacing = {{ xs: '2rem', sm: '3rem', md: '4rem' }}
                columns = {{ xs: 1, sm: 2, md: 3 }}
            >
                <SpeedDial 
                    ariaLabel = 'create-flashcard-label'
                    icon = { <SpeedDialIcon /> }
                    sx = {{
                        backgroundColor: '#00695f'
                    }}
                >
                    <SpeedDialAction 
                        key = 'create-flashcard'
                        onClick = { handleBackdropOpen }
                    />
                </SpeedDial>

            </Grid>
           
        </div>
    )
}

export default FlashcardBoard;