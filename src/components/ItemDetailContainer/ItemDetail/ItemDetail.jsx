import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";


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

  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonsVisibility, setBuyButtonsVisibility] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);

  const onAdd = count => {
    setItemsCount(count);
  };

  const onAddToCart = () => {
    setItemCountVisible(false);
    setBuyButtonsVisibility(false);
  };

  const onBuy = () => {
    setItemCountVisible(false);
    setBuyButtonsVisibility(false);
  };

  const onFinishBuy = () => {
    console.log('Termine mi compra!');
  };


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
      <ItemCount stock={stock} />
      {itemCountVisible && <ItemCount onAdd={onAdd} />}
      <br />
      <br />
      {buyButtonsVisibility && (
        <>
          <button onClick={onAddToCart}>Agregar al carrito</button>
          <button onClick={onBuy}>Comprar</button>
        </>
      )}
      {!buyButtonsVisibility && (
        <button onClick={onFinishBuy}>Terminar compra</button>
      )}
      <br />
      <br />
      {itemsCount}
    </Card>
  );
}

export default ItemDetail;
