import React from "react";

function Search({searchTerm, setSearchTerm, setFilteredList,itemsList}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('clicked')
   const filteredList = itemsList.filter(item => {
    return item.description.includes(searchTerm)})
    debugger;
    setFilteredList(filteredList)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
