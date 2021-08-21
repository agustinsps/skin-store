import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
    marginRight: "4rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    marginRight: "3rem",
  },
  button: {
    marginLeft: theme.spacing(3),
  },
  image: {
    marginRight: "10px",
    height: "3rem",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src="/Images/logo.png" className={classes.image} alt="Logo" />
          <div className={classes.grow} />
          <div className={classes.links}>
          <Typography variant="h6" color="textPrimary">
            <Link to="/"> Home </Link>
          </Typography>

          <Typography variant="h6" color="textPrimary">
            <Link to="/Novedades"> Novedades </Link>
          </Typography>
          </div>
          <div className={classes.button}>
            <Button variant={"outlined"}>
              <Link to="/LOGIN">
                {" "}
                <strong>LOGIN</strong>{" "}
              </Link>
            </Button>
          </div>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}
