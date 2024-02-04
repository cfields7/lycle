import '../css/Customization.css';
import BackButton from './BackButton';

import Character from './Character';

function Customization({ setCurrentPage, type, color, emotion, species, updateAnimalAttribute }) {

  function animalChangeColor(color) {
    updateAnimalAttribute("color", color);
    updateAnimalAttribute("emotion", "Happy");
    setTimeout(() => {
      updateAnimalAttribute("emotion", "Idle");
   }, 2000);
  }

  return(
    <div className="Customization">
      <Character type={type} color={color} emotion={emotion} species={species} updateAnimalAttribute={updateAnimalAttribute}/>

      <div className="customizationOptions">
        <div className="customizeTitle">Customize Your Character</div>
        <div className="colorLabel">Color</div>
        <div className="colorSelection">
        <div className="color red" onClick={() => animalChangeColor("Red")}></div>
        <div className="color orange" onClick={() => animalChangeColor("Orange")}></div>
        <div className="color yellow" onClick={() => animalChangeColor("Yellow")}></div>
        <div className="color green" onClick={() => animalChangeColor("Green")}></div>
          <div className="color blue" onClick={() => animalChangeColor("Blue")}></div>
          <div className="color white" onClick={() => animalChangeColor("White")}></div>
        </div>
        <button className="startButton" onClick={() => setCurrentPage("Game")}>Start Game!</button>
      </div>

      <BackButton navigateBack={() => setCurrentPage("Selection")} />

      
    </div>
  );
}

export default Customization;