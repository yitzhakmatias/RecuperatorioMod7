// src/app/page.js
import Link from 'next/link';
import {Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
const Home = () => {
    return (
        <>
            <Container sx={{ marginTop: 4 }}>
                <Box sx={{ padding: 3 }}>
                    {/* Header */}
                    <Typography variant="h4" sx={{ backgroundColor: '#388e3c', color: 'white', padding: '10px', textAlign: 'center', marginBottom: 3 }}>
                        Modulo 7: DESARROLLO FRONTEND CON REACTJS
                    </Typography>

                    {/* Welcome Section */}
                    <Typography variant="h6" gutterBottom>
                        Bienvenido
                    </Typography>
                    <Typography paragraph>
                        Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.
                    </Typography>

                    {/* Covered Topics Table */}
                    <Typography variant="h6" gutterBottom>
                        Temas Cubiertos
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableBody>
                                {[
                                    'Componentes funcionales y de clase',
                                    'Uso de React hooks como useState y useEffect',
                                    'Creación de custom hooks como useForm',
                                    'Gestión de variables de estado global con Redux',
                                    'Gestión de estado con useState',
                                    'Integración de Redux con React',
                                    'Manejo de Formularios en React',
                                ].map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Additional Resources Section */}
                    <Typography variant="h6" gutterBottom>
                        Recursos Adicionales
                    </Typography>
                    <Typography paragraph>
                        Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                    </Typography>
                    <Link href="https://reactjs.org/" target="_blank" rel="noopener">
                        React Official Documentation
                    </Link>

                    {/* Footer */}
                    <Box sx={{ marginTop: 5, textAlign: 'center' }}>
                        <Typography variant="body2" color="textSecondary">
                            © 2024 Modulo 7. USIP
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center', padding: 2 }}>
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
