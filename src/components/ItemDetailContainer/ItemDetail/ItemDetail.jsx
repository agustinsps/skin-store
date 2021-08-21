import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "2rem",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
}));

function ItemDetail({ name, productType, price, image, description, stock }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
      <CardContent>
        <Typography paragraph>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ItemDetail;
