"use client";
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeWord } from '../redux/dictionarySlice';

const RemoveWordModal = ({ setShow }) => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(removeWord(word));
        setShow(false);
    };

    return (
        <Dialog open={true} onClose={() => setShow(false)}>
            <DialogTitle>Remove Word</DialogTitle>
            <DialogContent>
                <TextField
                    label="Enter Word to Remove"
                    variant="outlined"
                    fullWidth
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShow(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RemoveWordModal;
