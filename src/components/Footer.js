import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';

function Copyright() {
  const theme = createMuiTheme({
    palette: {
      text: {
        primary: '#fff',
      },
    },
  });

    return (
      <>
        <Typography variant="subtitle1" align="center" color={theme.palette.text.primary} component="p">
            Think different
        </Typography>
        <Typography variant="body2" color={theme.palette.text.primary} align="center">
          {'Copyright © '}  
            <Link color="inherit" href="https://github.com/ail3ngrimaldi">
                Ailén Grimaldi
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            <br />
            Made with {' '}
            <Link color="inherit" href="https://material-ui.com/">
                Material UI        
            </Link>{'.'}
        </Typography> 
      </>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },

    footer: {
        position:"absolute",
        left:0,
        bottom:0,
        right:0,
        color:"white",
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

export default function Footer() {
    const classes = useStyles();
  
    return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
            <Copyright />
        </Box>
    </Container>
  );
}