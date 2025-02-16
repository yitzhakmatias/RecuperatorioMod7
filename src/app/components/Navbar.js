'use client'; // Mark this as a client-side component

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Dictionary App
                </Typography>
                <Button color="inherit">
                    <Link href="/" passHref>
                        Home
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link href="/dictionary" passHref>
                        Dictionary
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
