import * as React from 'react';
import {
    Button,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function GetInTouch() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 10, marginBottom: 10 }}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={12}>
                    <h2
                        style={{
                            fontFamily: 'serif',
                            fontSize: 50,
                            fontStyle: 'italic',
                            textAlign: 'center',
                            marginBottom: 30
                        }}
                    >
                        Contact us to buy property
                    </h2>
                    <p
                        style={{
                            paddingLeft: 350,
                            maxWidth: '50%',
                            textAlign: 'center',
                            marginBottom: 30,
                            fontSize: 30,
                            fontFamily: 'sans-serif'
                        }}
                    >
                        It is our commitment to ensure a professional and enjoyable
                        new home buying experience for you. <br/>
                        If you want to get a home to start living as a family in an
                        area that you love click the button below.
                    </p>
                </Grid>
                <Grid xs={4}>
                    <Button component={Link}
                            to={'/contact'}
                            variant="contained"
                            type="submit"
                            size="medium"
                            sx= {{
                                fontSize: '0.9rem',
                                textTransform: 'capitalize',
                                py: 2,
                                px: 4,
                                mt: 13,
                                mb: 2,
                                borderRadius: 5,
                                backgroundColor: '#14192d',
                                "&:hover": {
                                    backgroundColor: '#1e2a5a',
                                }
                            }}
                    >
                        Contact Us
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

