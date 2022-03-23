import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemsList,setItemsList, deleteItem}) {

const makeListings = itemsList.map(item => {return <ListingCard key={item.id} deleteItem={deleteItem} item ={item}/>})


  return (
    <main>
      <ul className="cards">
        {makeListings}
        {/* {itemsList.map(item => <ListingCard key={item.id} deleteItem={deleteItem} item ={item}/>)} */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
