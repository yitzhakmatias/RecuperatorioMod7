'use client';  // Mark this as a client-side component

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWords } from '../redux/dictionarySlice';  // Import action to set words in Redux

const LoadWords = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedWords = localStorage.getItem('words');
            if (storedWords) {
                // Dispatch the setWords action to load words from localStorage into Redux state
                dispatch(setWords(JSON.parse(storedWords)));
            }
        }
    }, [dispatch]);

    return null; // This component doesn't render anything, it's just for loading data
};

export default LoadWords;
