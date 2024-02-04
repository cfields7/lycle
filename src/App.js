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

  const [ animalAttributes, setAnimalAttributes ] = useState({
    type: "Undefined",
    color: "White",
    emotion: "Idle",
    species: "Undefined"
  });

  function updateAnimalAttribute(attribute, value) {
    setAnimalAttributes({...animalAttributes, [attribute]: value});
  }

  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Fredoka One' rel='stylesheet'></link>
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage}></Menu>}
      {(currentPage === 'Settings') && <Settings setCurrentPage={setCurrentPage}
                                                 gameSounds={gameSounds}
                                                 setGameSounds={setGameSounds}>
                                        </Settings>}
      {(currentPage === 'Game') && <Game setCurrentPage={setCurrentPage}></Game>}
      {(currentPage === 'Selection') && <Selection setCurrentPage={setCurrentPage}
                                                   updateAnimalAttribute={updateAnimalAttribute}>
                                        </Selection>}
      {(currentPage === 'Customization') && <Customization setCurrentPage={setCurrentPage}
                                                           animalAttributes={animalAttributes}
                                                           updateAnimalAttribute={updateAnimalAttribute}>
                                            </Customization>}
      
    </div>
  );
}

export default App;
