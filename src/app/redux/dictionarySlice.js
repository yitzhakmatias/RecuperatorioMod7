import { createSlice } from '@reduxjs/toolkit';

// Load dictionary from localStorage
const loadDictionaryFromLocalStorage = () => {
    const savedDictionary = localStorage.getItem('dictionary');
    return savedDictionary ? JSON.parse(savedDictionary) : { words: [] };
};

const initialState = loadDictionaryFromLocalStorage();

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        addWord: (state, action) => {
            state.words.push(action.payload);
            localStorage.setItem('dictionary', JSON.stringify(state)); // Sync with localStorage
        },
        removeWord: (state, action) => {
            state.words = state.words.filter(
                (word) => !Object.values(word).includes(action.payload)
            );
            localStorage.setItem('dictionary', JSON.stringify(state)); // Sync with localStorage
        },
        translateWord: (state, action) => {
            const word = state.words.find(
                (word) =>
                    word.es === action.payload ||
                    word.en === action.payload ||
                    word.pt === action.payload
            );
            return word ? word : null;
        },
    },
});

export const { addWord, removeWord, translateWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
