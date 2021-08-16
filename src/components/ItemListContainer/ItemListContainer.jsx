
import ItemList from '../Item/ItemLists';



function ItemListContainer(props) {
    return (
              <>
               <h1>{props.h1}</h1>
               <ItemList/> 
              </>
    )
}

export default ItemListContainer