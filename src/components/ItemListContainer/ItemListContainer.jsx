import ItemLists from "../ItemList/ItemLists";



function ItemListContainer(props) {



    return (
        <>
            <h1>{props.h1}</h1>
            <ItemLists />
        </>
    );
}

export default ItemListContainer;
