import React from "react";
import Search from "./Search";

function Header({setSearchTerm, searchTerm, setFilteredList, itemsList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} setFilteredList={setFilteredList} itemsList={itemsList}/>
    </header>
  );
}

export default Header;
