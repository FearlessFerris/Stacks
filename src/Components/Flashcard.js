// Flashcard Component Implementation 


// Dependencies 
import React, { useState } from 'react';


// CSS Dependencies 
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';


// Components & Necessary Files 


// Flashcard Component 
function Flashcard() {


    return( 
        <div
            className = 'flashcard-container'
        >
            <Card 
                sx = {{
                    display: 'flex',
                    backgroundColor: '#212121',
                    flexDirection: 'column',
                    height: '20rem',
                    width: '36rem'
                }}
            >
                <CardContent>
                    <Typography
                        variant = 'h2'
                        sx = {{
                            color: '#00695f',
                            textAlign: 'center'
                        }}
                    >
                        Flashcard 
                    </Typography>

                </CardContent>
            </Card>

        </div>
    )
}

export default Flashcard;