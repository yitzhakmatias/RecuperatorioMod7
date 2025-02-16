import { createSlice } from '@reduxjs/toolkit';

// Initialize the state, checking if we're on the client side
const initialState = {
    words: typeof window !== 'undefined' && localStorage.getItem('words')
        ? JSON.parse(localStorage.getItem('words'))
        : [],  // If there's no localStorage or the code runs server-side, default to an empty array
};

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        addWord: (state, action) => {
            state.words.push(action.payload);
            if (typeof window !== 'undefined') {
                // Only save to localStorage on the client-side
                localStorage.setItem('words', JSON.stringify(state.words));
            }
        },
        removeWord: (state, action) => {
            state.words = state.words.filter(word => word !== action.payload);
            if (typeof window !== 'undefined') {
                // Only save to localStorage on the client-side
                localStorage.setItem('words', JSON.stringify(state.words));
            }
        },
        // Add other actions here as needed
    },
});

export const { addWord, removeWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
