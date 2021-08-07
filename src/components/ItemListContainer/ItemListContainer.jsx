
import ItemCount from './../ItemCount/ItemCount';


function ItemListContainer(props) {
    return (
              <>
               <h1>{props.h1}</h1>
               <ItemCount/>
              </>
    )
}

export default ItemListContainer