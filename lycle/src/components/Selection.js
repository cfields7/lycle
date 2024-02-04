import '../css/Selection.css';
import Bird from '../images/Characters/Bird/Bird_Stencil.png';
import Cat from '../images/Characters/Cat/Cat_Stencil.png';
import Penguin from '../images/Characters/Penguin/Penguin_Stencil.png';

function Selection({ setCurrentPage }) {
  return(
    <div className="Selection">
      <div className="characters">
        <img className="animal" src={Bird} alt="Bird Selection"></img>
        <img className="animal" src={Cat} alt="Cat Selection"></img>
        <img className="animal" src={Penguin} alt="Penguin Selection"></img>
      </div>
      <div>Select an animal to live as</div>
    </div>
  );
}

export default Selection;