import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "2rem",
  },
  media: {
    height: "3rem",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Item({ name, productType, price, image, description, stock, id }) {
  const classes = useStyles();

  return (
      <div className="ItemStyle">
    <Card className={classes.root}>
      <Link to={`/${productType}/${id}`}>
        <CardHeader
          action={
            <Typography
              className={classes.action}
              variant="h5"
              color="textSecondary"
            >
              BTC {price}
            </Typography>
          }
          title={name}
        />
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <div> {productType} </div>
          </Typography>
        </CardContent>
      </Link>
    </Card>
    </div>
  );
}

export default Item;
