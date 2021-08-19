
import ItemLists from "../ItemList/ItemLists";
import ItemDetailContainer from './../ItemDetailContainer/ItemDetailContainer';







function ItemListContainer(props) {
    return (
                <>
                    <h1>{props.h1}</h1>
                    <ItemLists/>
                    <ItemDetailContainer/>       
                </>
    )
}

export default ItemListContainer