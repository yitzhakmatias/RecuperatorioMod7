'use client'; // Ensure this is treated as a client-side component

import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { translateWord } from '../redux/dictionarySlice';

const TranslateWordModal = ({ setShow }) => {
    const [word, setWord] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('es'); // Default to Spanish
    const [translation, setTranslation] = useState('');
    const dispatch = useDispatch();

    const handleTranslate = async () => {
        // Dispatch the translate action and get the result
        const result = await dispatch(translateWord({ word, language: selectedLanguage }));

        // Ensure the result is correctly set to translation
        const translatedText = result.words ? result.words : 'Not Found';
        setTranslation(translatedText); // Set translation state
    };

    return (
        <Dialog open={true} onClose={() => setShow(false)}>
            <DialogTitle>USIP translator</DialogTitle>
            <DialogContent>
                {/* Word input */}
                <TextField
                    label="Enter Word to Translate"
                    variant="outlined"
                    fullWidth
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    margin="normal"
                />

                {/* Language dropdown */}
                <FormControl fullWidth margin="normal">
                    <InputLabel>Language</InputLabel>
                    <Select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        label="Language"
                    >
                        <MenuItem value="es">Spanish (es)</MenuItem>
                        <MenuItem value="en">English (en)</MenuItem>
                        <MenuItem value="pt">Portuguese (pt)</MenuItem>
                    </Select>
                </FormControl>

                {/* Translated word output */}
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={translation}
                    disabled
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                {/* Close button */}
                <Button onClick={() => setShow(false)} color="secondary">
                    Close
                </Button>
                {/* Translate button */}
                <Button onClick={handleTranslate} color="primary">
                    Translate
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TranslateWordModal;
