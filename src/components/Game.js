import '../css/Game.css';
import Character from './Character';
import { useState } from 'react';

import Parakeet from '../data/Bird/parakeet.json';
import StrayCat from '../data/Cat/stray.json';
import Penguin from '../data/Penguin/normal.json';

function Game({ setCurrentPage, type, color, emotion, species, updateAnimalAttribute }) {

  const [ id, setId ] = useState("CS_START");

  function getOptionById(animal, id) {
    let foundOption;
    switch(animal) {
      case("Bird"):
        Parakeet.forEach((option) => {
          if (option.id === id) {
            foundOption = option;
          }
        });
        break;
      case("Cat"):
        StrayCat.forEach((option) => {
          if (option.id === id) {
            foundOption = option;
          }
        });
        break;
      case("Penguin"):
        Penguin.forEach((option) => {
          if (option.id === id) {
            foundOption = option;
          }
        });
        break;
      default:
        break;
    }
    return foundOption;
  }

  return(
    <div className="Game">
      <Character type={type} color={color} emotion={emotion} species={species} updateAnimalAttribute={updateAnimalAttribute}/>

      <div>{getOptionById(type, id).story}</div>

      <button onClick={() => {setId(getOptionById(type, id).optionA)}}>{getOptionById(type, getOptionById(type, id).optionA).option}</button>
      <button>{getOptionById(type, getOptionById(type, id).optionB).option}</button>

    </div>
  );
}

export default Game;