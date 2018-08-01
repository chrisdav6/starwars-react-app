import React, { Component } from 'react';
import './planetsContent.css';

class PlanetsContent extends Component {
  render() {
    return (
      <div>
        <div className="planetsContent">
          <h2 className="planetTitle">Planets</h2>
          <div className="planets">
          </div>
        </div>
      </div>
    );
  }
}

const getStarWarsPlanets = async function () {

  let pageCount = 1;

  do {
    let url = `https://swapi.co/api/planets/?page=${pageCount}`;
    let response = await fetch(url);
    let data = await response.json();

    data.results.forEach(planet => {
      let planetDiv = document.createElement("div");
      planetDiv.classList.add("planet");

      /*Planet Name*/
      let name = document.createElement("h3");
      if(planet.name !== "unknown") {
        name.textContent = planet.name;
      } else {
        name.textContent = "Planet Unknown";
      }
      planetDiv.appendChild(name);

      /*hr*/
      let hr = document.createElement("hr");
      planetDiv.appendChild(hr);

      /*Rotation Period*/
      let rotation = document.createElement("p");
      if (planet.rotation_period !== "unknown") {
        rotation.textContent = "Rotation Period: " + planet.rotation_period + "hrs.";
      } else {
        rotation.textContent = "Rotation Period: Unknown";
      }
      planetDiv.appendChild(rotation);

      /*Orbital Period*/
      let orbital = document.createElement("p");
      if (planet.orbital_period !== "unknown") {
        orbital.textContent = "Orbital Period: " + planet.orbital_period + " days";
      } else {
        orbital.textContent = "Orbital Period: Unknown";
      }
      planetDiv.appendChild(orbital);

      /*Climate*/
      let climate = document.createElement("p");
      if (planet.climate !== "unknown") {
        climate.textContent = "Climate: " + planet.climate.charAt(0).toUpperCase() + planet.climate.substr(1);
      } else {
        climate.textContent = "Climate: Unknown";
      }
      planetDiv.appendChild(climate);

      /*Create Character Div and Append to DOM*/
      document.querySelector(".planets").appendChild(planetDiv);
    });

    pageCount++;
  } while (pageCount <= 7);

};

getStarWarsPlanets();

export default PlanetsContent;