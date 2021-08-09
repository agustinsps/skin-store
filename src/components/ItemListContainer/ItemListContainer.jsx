
import ItemList from '../Item/ItemLists';
import ItemCount from './../ItemCount/ItemCount';


function ItemListContainer(props) {
    return (
              <>
               <h1>{props.h1}</h1>
               <ItemList/> 
               <ItemCount/>
              </>
    )
}

export default ItemListContainer