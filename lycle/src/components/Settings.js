import '../css/Settings.css';

function Settings({ setCurrentPage, gameSounds, setGameSounds }) {
  return(
    <div className="Settings">
      <div className="retry" onClick={() => setCurrentPage("Home")}>↺</div>
      <h1>Settings</h1>
      <div className="options">
        <input type="checkbox" checked={gameSounds} onClick={(e) => {console.log(gameSounds); setGameSounds(!gameSounds)}} />
        Game Sounds
      </div>
    </div>
  );
}

export default Settings;