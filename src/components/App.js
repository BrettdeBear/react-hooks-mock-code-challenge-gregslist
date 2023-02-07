import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [filterBy, setFilterBy] = useState("")

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(console.log)

    const newListing = listings.filter(listingObj => {
      return listingObj.id !== id;
    });
    setListings(newListing);
  }



  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listingData) => {
        setListings(listingData)
      })
  }, []); 

  // filter listings
  const filteredListings = listings.filter(listingObj => {
    return listingObj.description.toLowerCase().includes(filterBy.toLowerCase())
  });

  return (
    <div className="app">
      <Header 
        filterBy={filterBy}
        setFilterBy={setFilterBy}  
      />
      <ListingsContainer 
        listings={filteredListings}
        onClickDelete={handleDelete}
      />
    </div>
  );
}

export default App;
