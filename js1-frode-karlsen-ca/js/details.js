// JavaScript - JS1 - CA - details.html

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

// check if the id parameter exist
if (params.has("id")) {
    id = params.get("id");
}

// add the id variable to the URL we will use in the fetch method
const newUrl = `https://rickandmortyapi.com/api/character/${id}`;

fetch(newUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    changeValues(json);
  })
  .catch(function(error) {
    document.location.href = "error.html";
  });
   
function changeValues(result) {
    const imgClass = document.querySelector(".details-image");
    imgClass.src = result.image;
    imgClass.alt = result.name;

// set innerHTML properties of character name, status, species, origin and location

    const characterName = document.querySelector("h1");
    characterName.innerHTML = result.name;

    const statusValue = document.querySelector("#status");
    statusValue.innerHTML = result.status;

    const speciesValue = document.querySelector("#species");
    speciesValue.innerHTML = result.species;

    const originValue = document.querySelector("#origin");
    originValue.innerHTML = result.origin.name;

    const locationValue = document.querySelector("#location");
    locationValue.innerHTML = result.location.name;

    document.title = result.name;
}


