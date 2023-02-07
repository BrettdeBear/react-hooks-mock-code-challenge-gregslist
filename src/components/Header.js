import React from "react";
import Search from "./Search";

function Header({ filterBy, setFilterBy }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterBy={filterBy} setFilterBy={setFilterBy}/>
    </header>
  );
}

export default Header;
