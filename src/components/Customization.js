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
        <div className={`color red ${color === "Red"}`} onClick={() => animalChangeColor("Red")}></div>
        <div className={`color orange ${color === "Orange"}`} onClick={() => animalChangeColor("Orange")}></div>
        <div className={`color yellow ${color === "Yellow"}`} onClick={() => animalChangeColor("Yellow")}></div>
        <div className={`color green ${color === "Green"}`} onClick={() => animalChangeColor("Green")}></div>
        <div className={`color blue ${color === "Blue"}`} onClick={() => animalChangeColor("Blue")}></div>
      </div>
        <div className="colorLabel">Special</div>
        <div className="colorSelection">
          <div className={`color july ${color === "July"}`} onClick={() => animalChangeColor("July")}></div>
          <div className={`color white ${color === "White"}`} onClick={() => animalChangeColor("White")}></div>
        </div>
      </div>
      <div className="startContainer">
        <button className="startButton" onClick={() => setCurrentPage("Game")}>Start Game!</button>
      </div>

      <BackButton navigateBack={() => setCurrentPage("Selection")} />

      
    </div>
  );
}

export default Customization;