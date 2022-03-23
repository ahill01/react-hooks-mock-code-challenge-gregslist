import React from "react";
import Search from "./Search";

function Header({setSearchTerm, searchTerm, handleSubmit,itemsList, sortFunction}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSubmit={handleSubmit} itemsList={itemsList}/>
      <br/>
      <button onClick={sortFunction}> Sort Locations</button>
    </header>
  );
}

export default Header;
