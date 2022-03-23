import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [itemsList, setItemsList] = useState([])

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(items => setItemsList(items))
},[])

function deleteItem(e, id){
  console.log(id + " deleted")
  //delete request
const configObj = {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
}

fetch(`http://localhost:6001/listings/${id}`, configObj)
.then(res => res.json())
.then(thing => console.log(thing))

  //update itemsList
  const newList = itemsList.filter(item => item.id !== id)
  setItemsList(newList)
  //
}

  return (
    <div className="app">
      <Header />
      <ListingsContainer itemsList={itemsList} setItemsList={setItemsList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
