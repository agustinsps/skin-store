import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartWidget from '../CartWidget/CartWidget';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor:"whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "3rem",
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <img src="Images/logo.png" className={classes.image} alt="Logo"/>
            <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary">
            Novedades
          </Typography>
          <div className={classes.button}> 
          <Button variant={"outlined"}>
          <strong>LOGIN</strong>
          </Button> 
          </div>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
