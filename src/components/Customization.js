import '../css/Customization.css';

import Character from './Character';

function Customization({ setCurrentPage, animalAttributes, updateAnimalAttribute }) {
  return(
    <div className="Customization">
      <Character animalAttributes={animalAttributes}/>

      <button onClick={() => updateAnimalAttribute("color", "Green")}>Red</button>
    </div>
  );
}

export default Customization;