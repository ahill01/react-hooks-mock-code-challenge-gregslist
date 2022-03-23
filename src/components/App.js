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

  return (
    <div className="app">
      <Header />
      <ListingsContainer itemsList={itemsList} setItemsList={setItemsList} />
    </div>
  );
}

export default App;
