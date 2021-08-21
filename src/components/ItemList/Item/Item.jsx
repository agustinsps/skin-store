import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemCount from "../../ItemCount/ItemCount";



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    action: {
        marginTop: "2rem",
    },
    media: {
        height: "3rem",
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function Item ({ name, productType, price, image, description, stock }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

        return (
            <Card className={classes.root} >
                <CardHeader
                    action = {
                        <Typography
                            className={classes.action}
                            variant='h5'
                            color='textSecondary'
                        >
                         BTC {price}
                        </Typography>
                       }
                   title= {name}
                />
                <CardMedia className={classes.media}
                 image  =  {image} 
                />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <div> {productType} </div> 
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>{description}</Typography>
                        </CardContent>
                    </Collapse>
                    <ItemCount stock={stock}/>
            </Card>
                );
  }

                export default Item