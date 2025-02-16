'use client';  // This is a client component

import React from 'react';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import { store } from '../redux/store';  // Import your Redux store

const ClientWrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ClientWrapper;
