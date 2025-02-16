import React, { useState } from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import { useDispatch } from 'react-redux';
import AddWordModal from './AddWordModal';
import RemoveWordModal from './RemoveWordModal';
import TranslateWordModal from './TranslateWordModal';
import Link from "next/link";

const Dictionary = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showTranslateModal, setShowTranslateModal] = useState(false);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dictionary USIP
            </Typography>
            <Typography variant="h6">
                Este modulo(diccionario) corresponde al recuperatorio del{' '}
                <span style={{ color: 'red' }}>modulo-7</span>
            </Typography>
            <Typography variant="h7">
                <Link href="https://github.com/yitzhakmatias/RecuperatorioMod7" target="_blank" rel="noopener">
                    React URL: https://github.com/yitzhakmatias/RecuperatorioMod7
                </Link>
            </Typography>
            <Box mb={2} />
            <Button variant="contained" color="primary" onClick={() => setShowAddModal(true)} style={{ marginRight: '10px' }}>
                Add Word
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setShowRemoveModal(true)} style={{ marginRight: '10px' }}>
                Remove Word
            </Button>
            <Box mb={2} />
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
