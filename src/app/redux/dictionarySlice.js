import {createSlice} from '@reduxjs/toolkit';

// Initialize state as empty (we'll load words from localStorage on the client side)
const initialState = {
    words: [],
};

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        // Action to set words from localStorage or another source
        setWords: (state, action) => {
            state.words = action.payload;
            // Always update localStorage when setting words
            if (typeof window !== 'undefined') {
                localStorage.setItem('words', JSON.stringify(state.words));
            }
        },
        // Action to add a word to Redux state and localStorage
        addWord: (state, action) => {
            // Load words from localStorage before adding
            const storedWords = typeof window !== 'undefined' && localStorage.getItem('words')
                ? JSON.parse(localStorage.getItem('words'))
                : [];

            state.words = [...storedWords, action.payload];
            // Save the updated state to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('words', JSON.stringify(state.words));
            }
        },
        // Action to remove a word from Redux state and localStorage
        removeWord: (state, action) => {
            // Load words from localStorage before removing
            const storedWords = typeof window !== 'undefined' && localStorage.getItem('words')
                ? JSON.parse(localStorage.getItem('words'))
                : [];

            // Filter the words based on the payload value
            // Remove the word if action.payload matches any language value (es, en, pt)
            state.words = storedWords.filter(word => {
                // Compare the payload value with the word's language values (es, en, pt)
                return !Object.values(word).includes(action.payload); // If it matches, it will be excluded
            });

            // Save the updated words list to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('words', JSON.stringify(state.words));
            }
        },
        // Action to find and return a translated word from the state
        translateWord: (state, action) => {
            const {word, language} = action.payload;
            // Load words from localStorage before searching for translation
            const storedWords = typeof window !== 'undefined' && localStorage.getItem('words')
                ? JSON.parse(localStorage.getItem('words'))
                : [];

            // Find word in the words array (checking by language)
            const foundWord = storedWords.find(item => {
                if(item['es'] === word ){
                    return item[language];
                }
            });
            if (foundWord) {
                action.words = foundWord[language];

            } else {
                action.words =  'Not Found';
            }
            return action.payload;
        },
    },
});

export const {setWords, addWord, removeWord, translateWord} = dictionarySlice.actions;

export default dictionarySlice.reducer;
