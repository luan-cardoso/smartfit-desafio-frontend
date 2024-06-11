import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#ffb610',
        },
        secondary: {
            main: '#ececec'
        },
    },

    typography: {
        button: {
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '2px',
            width: 'fit-content',
        },
        fontFamily: 'Gotham Bold',
    }
})

export default function ButtonUsage(props) {
  return <ThemeProvider theme={Theme} >
            <Button 
                onClick={props.click}
                href={props.link} 
                variant={props.variant}
                color={props.colorButton}
                sx={{ color: '#000000' }}
                > 
                {props.name}
            </Button>
        </ThemeProvider>;
}