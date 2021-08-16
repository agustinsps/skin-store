
import ItemDetail from "./ItemDetail";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

function ItemDetailContainer() {
    const classes = useStyles();

    return (
              <div className={classes.root}>
      <Grid container spacing={3}>
          {
              ItemDetail.map(item => <Grid item xs={12} sm={6} md={4} lg={3}>
                                       <ItemDetail key={ItemDetail.id}/>
                                     </Grid> )
          }
      </Grid>
    </div>
    )
}

export default ItemDetailContainer