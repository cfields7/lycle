import '../css/Game.css';
import Character from './Character';
import { useState } from 'react';

import Parakeet from '../data/Bird/parakeet.json';
import StrayCat from '../data/Cat/stray.json';
import Penguin from '../data/Penguin/normal.json';

import Audio from '../audio/bird_fear.mp3';

function Game({ setCurrentPage, type, color, emotion, species, updateAnimalAttribute }) {
  let prefix;
  if (type === "Bird") {
    prefix = "PB"
  } else if (type === "Cat") {
    prefix = "CS"
  } else if (type === "Penguin") {
    prefix = "NP"
  }

  const [ id, setId ] = useState(prefix + "_START");

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

  function advanceChoice(nextId) {
    if (nextId === prefix + "_MENU")
      setCurrentPage("Home");
    setId(nextId);
    updateAnimalAttribute("emotion", getOptionById(type, nextId).emotion);
    let audio = new Audio(Audio);
    audio.play();
  }

  return(
    <div className="Game">
      <Character type={type} color={color} emotion={emotion} species={species} updateAnimalAttribute={updateAnimalAttribute}/>

      <div className="progression">
        <div className={`story ${color}`}>{getOptionById(type, id).story}</div>

        <div className="storyOptions">
          <button onClick={() => advanceChoice(getOptionById(type, id).optionA)}>{getOptionById(type, getOptionById(type, id).optionA).option}</button>
          <button onClick={() => advanceChoice(getOptionById(type, id).optionB)}>{getOptionById(type, getOptionById(type, id).optionB).option}</button>
        </div>
      </div>
    </div>
  );
}

export default Game;