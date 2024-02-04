import '../css/Menu.css';

function Menu({ setCurrentPage }) {
  return(
    <div className="Menu">
      <h1>Lycle</h1>
      <div className="menuButtons">
        <button onClick={() => setCurrentPage()}>Play</button>
        <button onClick={() => setCurrentPage("Settings")}>Setting</button>
      </div>
    </div>
  );
}

export default Menu;