import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/nokia.png'

const Header = () => {

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
                    Search for your devices to make sure it's not stolen
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
                    the loyalty of our customers as well as the security of their purchase are our priorities,
                    check the reliability of devices on our platform.
                </Typography>

                <Box>
                    <Button
                    variant='contained'
                    component={Link}
                    to={'/store'}
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
                        Find now
                    </Button>
                    <Button
                    component={Link}
                    to={'/about'}
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
                        About Us
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{
                    width: "50%",
                    marginBottom: 140,
                    height: 'auto',
                    display: 'block',
                    marginLeft: 250
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header
