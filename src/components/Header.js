import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../avatar.jpeg';

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1),
    },
    title: {
        color: "grey"
    },
    subtitle: {
        color: "red",
        marginBotton: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100ww",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
             <Avatar className={classes.avatar} src={avatar} alt="Ailen Grimaldi" />
        </Grid>
        <Typography className={classes.title} variant="h4">
            <Typed strings={["Hello, my name is Ailen Grimaldi"]} typeSpeed={40}></Typed>
        </Typography>
        <br/>
        <Typography className={classes.subtitle} variant="h5">
            <Typed 
            strings={["I'm a Jr. Fullstack Web Developer", "I'm a technology enthusiastic", "I'm curious as f***"]} 
            typeSpeed={40} 
            backSpeed={60}
            loop
            >
            </Typed>
        </Typography>
    </Box>
    );
};

export default Header;