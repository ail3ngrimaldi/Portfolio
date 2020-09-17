import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
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
    <Typography 
    variant="subtitle1" 
    align="center" 
    color={theme.palette.text.primary} 
    component="p"
    >
      Think different.
      </Typography>
      <Typography 
        variant="body2" 
        align="center"
        color={theme.palette.text.primary} 
      >
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    color:"black",
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
     // theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
            <Copyright />
        </Box>
      </Container>
    </div>
  );
}