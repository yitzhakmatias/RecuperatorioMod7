import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import AddWordModal from './AddWordModal';
import RemoveWordModal from './RemoveWordModal';
import TranslateWordModal from './TranslateWordModal';

const Dictionary = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showTranslateModal, setShowTranslateModal] = useState(false);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dictionary Module
            </Typography>

            <Button variant="contained" color="primary" onClick={() => setShowAddModal(true)} style={{ marginRight: '10px' }}>
                Add Word
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setShowRemoveModal(true)} style={{ marginRight: '10px' }}>
                Remove Word
            </Button>
            <Button variant="contained" color="info" onClick={() => setShowTranslateModal(true)}>
                Translate Word
            </Button>

            {showAddModal && <AddWordModal setShow={setShowAddModal} />}
            {showRemoveModal && <RemoveWordModal setShow={setShowRemoveModal} />}
            {showTranslateModal && <TranslateWordModal setShow={setShowTranslateModal} />}
        </Container>
    );
};

export default Dictionary;
