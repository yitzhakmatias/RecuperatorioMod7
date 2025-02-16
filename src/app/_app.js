// src/app/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '/redux/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './utils/theme'; // Optional Material UI theme
import '../styles/globals.css'; // Import global CSS

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
