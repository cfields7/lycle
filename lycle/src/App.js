import './App.css';
import { useState } from 'react';

import Menu from './components/Menu.js';

function App() {

  const [ currentPage, setCurrentPage ] = useState('Home');

  return (
    <div className="App">
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage}></Menu>}
      {(currentPage === 'Settings') && <div>Settings Page</div>}
      
    </div>
  );
}

export default App;
