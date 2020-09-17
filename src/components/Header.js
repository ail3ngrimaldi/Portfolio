import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box, Container } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../avatar.jpeg';
import ComponentCards from '../components/Cards'

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(10),
    },
    title: {
        color: "white"
    },
    subtitle: {
        color: "#D5DBDB",
        marginBotton: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100ww",
        textAlign: "center",
        zIndex: 1
    },
    main: {
        display: 'block',
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
    <Container component="main" className={classes.main} maxWidth="sm">
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
             <Avatar className={classes.avatar} src={avatar} alt="Ailen Grimaldi" />
        </Grid>
        <Typography className={classes.title} variant="h4">
            <Typed strings={["Hi, my name is Ailén Grimaldi"]} typeSpeed={40}></Typed>
        </Typography>
        <br/>
        <Typography className={classes.subtitle} variant="h5">
            <Typed 
            strings={["I'm a Jr. Fullstack Web Developer", "I'm a technology enthusiastic", "I'm extremely curious", "I'm a tetris lover"]} 
            typeSpeed={40} 
            backSpeed={60}
            loop
            >
            </Typed>
        </Typography>
        <ComponentCards/>
    </Box>
    </Container>
    );
};

export default Header;