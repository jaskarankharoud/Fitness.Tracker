import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "/src/context/MyContext";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const context = useContext(ContextProvider);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //this method gets the key word entered by user
  function clickHandler() {
    context.setUserInput(searchTerm);
  }

  return (
    <div>
      <div className="container my-5">
        <h1 className="searchbarText">Search for Recipes</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Which recipe you looking for...?"
            aria-label="Search for recipes"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="btn btn-danger"
            type="button"
            onClick={clickHandler}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
