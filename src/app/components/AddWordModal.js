import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addWord } from '../redux/dictionarySlice';

const AddWordModal = ({ setShow }) => {
    const [word, setWord] = useState({ es: '', en: '', pt: '' });
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addWord(word));
        setShow(false);
    };

    return (
        <Dialog open={true} onClose={() => setShow(false)}>
            <DialogTitle>Add Word</DialogTitle>
            <DialogContent>
                <TextField
                    label="Spanish"
                    variant="outlined"
                    fullWidth
                    value={word.es}
                    onChange={(e) => setWord({ ...word, es: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="English"
                    variant="outlined"
                    fullWidth
                    value={word.en}
                    onChange={(e) => setWord({ ...word, en: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Portuguese"
                    variant="outlined"
                    fullWidth
                    value={word.pt}
                    onChange={(e) => setWord({ ...word, pt: e.target.value })}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShow(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddWordModal;
