import ItemCount from "./ItemCount";

function ItemListContainer (props) {
  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemCount stock={5} initial={1}/>
    </>
  )
}

export default ItemListContainer;