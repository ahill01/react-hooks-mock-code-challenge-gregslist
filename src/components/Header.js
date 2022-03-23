import React from "react";
import Search from "./Search";

function Header({setSearchTerm, searchTerm, handleSubmit,itemsList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSubmit={handleSubmit} itemsList={itemsList}/>
    </header>
  );
}

export default Header;
