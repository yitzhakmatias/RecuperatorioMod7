// src/app/page.js
import Link from 'next/link';
import {Box, Container, Typography} from "@mui/material";
const Home = () => {
    return (
        <>
            <Container sx={{ marginTop: 4 }}>
                <Box sx={{ textAlign: 'center', padding: 2 }}>
                    <Typography variant="h3" gutterBottom>
                        Welcome to the Dictionary App
                    </Typography>
                    <Typography variant="h6" paragraph>
                        This is the main page of the Dictionary App. Navigate to the dictionary page to manage words in multiple languages.
                    </Typography>
                    <Link href="/dictionary" passHref>
                        <Typography variant="body1" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                            Go to Dictionary
                        </Typography>
                    </Link>
                </Box>
            </Container>
        </>
    );
};

export default Home;
