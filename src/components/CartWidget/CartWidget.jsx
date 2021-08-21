import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

function CartWidget() {
    return (
            <IconButton aria-label="show cart items" color="inherit">   
              <ShoppingCart fontSize="large" color="primary"/>
            </IconButton>
    )
}

export default CartWidget