import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  
  const petCard = pets.map((pet)=>(
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>
  ))
  
  return <div className="ui cards">
    {petCard}
  </div>;
}

export default PetBrowser;
