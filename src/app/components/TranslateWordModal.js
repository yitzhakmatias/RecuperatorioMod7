import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { translateWord } from '../redux/dictionarySlice';

const TranslateWordModal = ({ setShow }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const dispatch = useDispatch();

    const handleTranslate = () => {
        const result = dispatch(translateWord(word));
        setTranslation(result.payload ? JSON.stringify(result.payload) : 'Not Found');
        setShow(false);
    };

    return (
        <Dialog open={true} onClose={() => setShow(false)}>
            <DialogTitle>Translate Word</DialogTitle>
            <DialogContent>
                <TextField
                    label="Enter Word to Translate"
                    variant="outlined"
                    fullWidth
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    margin="normal"
                />
                {translation && (
                    <Typography variant="body1" style={{ marginTop: '10px' }}>
                        Translation: {translation}
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShow(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleTranslate} color="primary">
                    Translate
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TranslateWordModal;
