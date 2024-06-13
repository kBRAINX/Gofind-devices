import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/tel1.png'
import headerLaptop from'../assets/lap1.png'

const Headstore = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: 'black',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText
                component='section'
                sx={{
                    marginTop: 15,
                    marginLeft: 10,
                }}
            >
                <Typography
                    variant='h2'
                    component= 'h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    The store verify here if your phone is not stolen
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    If you have different thing you want to buy you can verify here the service give the possibility to find many things
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        component={Link}
                        to={'/'}
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 5,
                            borderColor: '#14192d',
                            color: '#fff',
                            backgroundColor: '#14192d',
                            "&&:hover": {
                                backgroundColor: "#343a55"
                            },
                            "&&:focus": {
                                backgroundColor: "#343a55"
                            }
                        }}
                    >
                        Go Home
                    </Button>
                    <Button
                        component={Link}
                        to={'/store'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize:'0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 5,
                            color: '#fff',
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            "&&:hover": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            },
                            "&&:focus": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            }
                        }}
                    >
                        Start to Find
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <div style={{
                    display: 'flex',
                }}>
                    <img
                        src={headerImg}
                        alt="headerImg"
                        style={{
                            width: "35%",
                            marginBottom: 240,
                            height: '400px',
                            display: 'block',
                            marginLeft: 200
                        }}
                    />
                    <img
                        src={headerLaptop}
                        alt="headerLaptop"
                        style={{
                            width: "35%",
                            marginBottom: 240,
                            height: '400px',
                            display: 'block',
                            marginLeft: 200,
                            marginRight: 150
                        }}
                    />
                </div>
            </Box>

        </CustomBox>
    )
}

export default Headstore
