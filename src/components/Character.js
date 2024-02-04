import '../css/Character.css';

import BirdBlue from '../images/Characters/Bird/Colors/Bird_Blue.png';
import BirdGreen from '../images/Characters/Bird/Colors/Bird_Green.png';
import BirdJuly from '../images/Characters/Bird/Colors/Bird_July.png';
import BirdRed from '../images/Characters/Bird/Colors/Bird_Red.png';
import BirdWhite from '../images/Characters/Bird/Colors/Bird_White.png';
import BirdYellow from '../images/Characters/Bird/Colors/Bird_Yellow.png';

import CatBlue from '../images/Characters/Cat/Colors/Cat_Blue.png';
import CatGreen from '../images/Characters/Cat/Colors/Cat_Green.png';
import CatRed from '../images/Characters/Cat/Colors/Cat_Red.png';
import CatWhite from '../images/Characters/Cat/Colors/Cat_White.png';
import CatYellow from '../images/Characters/Cat/Colors/Cat_Yellow.png';

import PenguinBlue from '../images/Characters/Penguin/Colors/Penguin_Blue.png';
import PenguinGreen from '../images/Characters/Penguin/Colors/Penguin_Green.png';
import PenguinRed from '../images/Characters/Penguin/Colors/Penguin_Red.png';
import PenguinWhite from '../images/Characters/Penguin/Colors/Penguin_White.png';
import PenguinYellow from '../images/Characters/Penguin/Colors/Penguin_Yellow.png';

function Character({ animalAttributes }) {

  return(
    <div className="Character">
      {animalAttributes.type === "Bird" && <div>
        {animalAttributes.color === "Blue" && <div>
          <img src={BirdBlue} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Green" && <div>
          <img src={BirdGreen} alt="Character"></img>
        </div>}
        {animalAttributes.color === "July" && <div>
          <img src={BirdJuly} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Red" && <div>
          <img src={BirdRed} alt="Character"></img>
        </div>}
        {animalAttributes.color === "White" && <div>
          <img src={BirdWhite} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Yellow" && <div>
          <img src={BirdYellow} alt="Character"></img>
        </div>}
      </div>}

      {animalAttributes.type === "Cat" && <div>
        {animalAttributes.color === "Blue" && <div>
          <img src={CatBlue} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Green" && <div>
          <img src={CatGreen} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Red" && <div>
          <img src={CatRed} alt="Character"></img>
        </div>}
        {animalAttributes.color === "White" && <div>
          <img src={CatWhite} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Yellow" && <div>
          <img src={CatYellow} alt="Character"></img>
        </div>}
      </div>}

      {animalAttributes.type === "Penguin" && <div>
        {animalAttributes.color === "Blue" && <div>
          <img src={PenguinBlue} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Green" && <div>
          <img src={PenguinGreen} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Red" && <div>
          <img src={PenguinRed} alt="Character"></img>
        </div>}
        {animalAttributes.color === "White" && <div>
          <img src={PenguinWhite} alt="Character"></img>
        </div>}
        {animalAttributes.color === "Yellow" && <div>
          <img src={PenguinYellow} alt="Character"></img>
        </div>}
      </div>}
    </div>
  );
}

export default Character;