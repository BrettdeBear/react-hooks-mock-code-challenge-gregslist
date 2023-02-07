import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onClickDelete }) {
  const listingItems = listings.map(listingObj => {
    return <ListingCard 
             key={listings.id} 
             listingObj={listingObj} 
             onClickDelete={onClickDelete}
           />;
  });

  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
