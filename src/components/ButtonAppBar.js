import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
      color="white" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link to={'/'}>
        <Button>
        <HomeIcon/>
        </Button>
        </Link>
        <Link 
        to={'/hobbies'}
        style={{ textDecoration: 'none' }}
        >
        <Button >Hobbies</Button>
        </Link>
        <Link
        to={'/studies'}
        style={{ textDecoration: 'none' }}
        >
        <Button>Studies</Button>
        </Link>
        <Link
        to={'/jobs'}
        style={{ textDecoration: 'none' }}
        >
        <Button>Jobs</Button>
        </Link>
          <Typography variant="h6" className={classes.title}>
            Welcome!
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
