import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemsList, setItemsList}) {

function makeListings(){
  itemsList.map(item => {
  console.log("making cards");
  return <ListingCard key={item.id} item ={item}/>
})}

  return (
    <main>
      <ul className="cards">
        {itemsList.map(item => <ListingCard key={item.id} item ={item}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
