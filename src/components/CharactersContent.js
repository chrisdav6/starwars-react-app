import React, { Component } from 'react';
import './charactersContent.css';

class CharactersContent extends Component {
  render() {
    return (
      <div>
        <div className="charactersContent">
          <h2 className="characterTitle">Characters</h2>
          <div className="characters">
          </div>
        </div>
      </div>
    );
  }
}

const getStarWarsCharacter = async function () {

  let pageCount = 1;
  
  do {
    let url = `https://swapi.co/api/people/?page=${pageCount}`;
    let response = await fetch(url);
    let data = await response.json();

    data.results.forEach(character => {
      let characterDiv = document.createElement("div");
      characterDiv.classList.add("character");

      /*Character Name*/
      let name = document.createElement("h3");
      name.textContent = character.name;
      characterDiv.appendChild(name);

      /*hr*/
      let hr = document.createElement("hr");
      characterDiv.appendChild(hr);

      /*Character Weight*/
      let weight = document.createElement("p");
      let kilos = character.mass;
      kilos = kilos.replace(",", "");
      let lbs = kilos * 2.2;
      lbs = Math.round(lbs);
      if (kilos !== "unknown") {
        weight.textContent = "Weight: " + lbs + "lbs.";
      } else {
        weight.textContent = "Weight: Unknown";
      }
      characterDiv.appendChild(weight);

      /*Character Height*/
      let height = document.createElement("p");
      let cms = character.height;
      let inches = cms * .393;
      inches = Math.round(inches);
      if (cms !== "unknown") {
        height.textContent = "Height: " + inches + '"';
      } else {
        height.textContent = "Height: Unknown";
      }      
      characterDiv.appendChild(height);

      /*Character Eye Color*/
      let eyes = document.createElement("p");
      eyes.textContent = "Eye Color: " + character.eye_color.charAt(0).toUpperCase() + character.eye_color.substr(1);
      characterDiv.appendChild(eyes);
      
      /*Create Character Div and Append to DOM*/
      document.querySelector(".characters").appendChild(characterDiv);
    });

    pageCount++;
  } while(pageCount <= 9);
  
};

getStarWarsCharacter();

export default CharactersContent;