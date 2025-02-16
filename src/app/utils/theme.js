// src/utils/theme.js
import { createTheme } from '@mui/material/styles';

// Define the theme configuration
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Primary color (blue)
        },
        secondary: {
            main: '#ff4081', // Secondary color (pink)
        },
        background: {
            default: '#f4f4f4', // Background color
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // Default font
    },
    // Add any other customizations you'd like here
});

export default theme;
