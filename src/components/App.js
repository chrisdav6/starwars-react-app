import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import CharactersContent from './CharactersContent';
import PlanetsContent from './PlanetsContent';
import ScrollTop from './ScrollTop';

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <CharactersContent />
        <PlanetsContent />
        <ScrollTop/>
      </div>
    );
  }
}

export default App;
