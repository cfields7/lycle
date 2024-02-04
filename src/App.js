import './App.css';
import { useState } from 'react';

import Menu from './components/Menu.js';
import Settings from './components/Settings.js';
import Game from './components/Game.js';
import Selection from './components/Selection.js';
import Customization from './components/Customization.js';

function App() {

  const [ currentPage, setCurrentPage ] = useState('Home');

  const [ gameSounds, setGameSounds ] = useState(false);

  const [ animalType, setAnimalType ] = useState("Undefined");
  const [ animalColor, setAnimalColor ] = useState("White");
  const [ animalEmotion, setAnimalEmotion ] = useState("Idle");
  const [ animalSpecies, setAnimalSpecies ] = useState("Undefined");

  function updateAnimalAttribute(attribute, value) {
    switch(attribute) {
      case("type"):
        setAnimalType(value);
        break;
      case("color"):
        setAnimalColor(value);
        break;
      case("emotion"):
        setAnimalEmotion(value);
        break;
      case("species"):
        setAnimalSpecies(value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Fredoka One' rel='stylesheet'></link>
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage}></Menu>}
      {(currentPage === 'Settings') && <Settings setCurrentPage={setCurrentPage}
                                                 gameSounds={gameSounds}
                                                 setGameSounds={setGameSounds}>
                                        </Settings>}
      {(currentPage === 'Game') && <Game setCurrentPage={setCurrentPage}
                                         type={animalType}
                                         color={animalColor}
                                         emotion={animalEmotion}
                                         species={animalSpecies}
                                         updateAnimalAttribute={updateAnimalAttribute}></Game>}
      {(currentPage === 'Selection') && <Selection setCurrentPage={setCurrentPage}
                                                   updateAnimalAttribute={updateAnimalAttribute}>
                                        </Selection>}
      {(currentPage === 'Customization') && <Customization setCurrentPage={setCurrentPage}
                                                           type={animalType}
                                                           color={animalColor}
                                                           emotion={animalEmotion}
                                                           species={animalSpecies}
                                                           updateAnimalAttribute={updateAnimalAttribute}>
                                            </Customization>}
      
    </div>
  );
}

export default App;
