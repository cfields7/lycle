import '../css/Menu.css';
import LycleLogo from '../images/Lycle_Logo.png';

function Menu({ setCurrentPage }) {
  return(
    <div className="Menu">
      <img src={LycleLogo}></img>
      <div className="menuButtons">
        <button onClick={() => setCurrentPage()}>Play</button>
        <button onClick={() => setCurrentPage("Settings")}>Setting</button>
      </div>
    </div>
  );
}

export default Menu;