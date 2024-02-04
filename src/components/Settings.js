import '../css/Settings.css';
import BackButton from './BackButton';

function Settings({ setCurrentPage, gameSounds, setGameSounds }) {
  return(
    <div className="Settings">
      <h1>Settings</h1>
      <div className="options">
        <input type="checkbox" checked={gameSounds} onClick={(e) => {console.log(gameSounds); setGameSounds(!gameSounds)}} />
        Game Sounds
      </div>
      <BackButton navigateBack={() => setCurrentPage("Home")} />
    </div>
  );
}

export default Settings;