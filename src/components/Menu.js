import '../css/Menu.css';
import LycleLogo from '../images/Lycle_Logo.png';

function Menu({ setCurrentPage }) {
  return(
    <div className="Menu">
      <img className="logo" src={LycleLogo} alt="Lycle Logo"></img>
      <div className="menuButtons">
        <button onClick={() => setCurrentPage("Selection")}>Play</button>
        <button onClick={() => setCurrentPage("Settings")}>Settings</button>
      </div>
      <div className="credits">
        <div>Fayaz & Christopher</div>
        <div>Hack_NCState 2024</div>
      </div>  
    </div>
  );
}

export default Menu;