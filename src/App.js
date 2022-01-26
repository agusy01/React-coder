import './App.css';

import NavBar from './components/NavBar';
import Item from './components/ItemListContainer';


function App() {
  return (<>
    <header className="header-content">
      <div className="App">
        <NavBar img='../Logo.png' />
      </div>
    </header>
    <main>
      <div>
        <Item greeting="Hola, mi nombre es Agustin"/>
      </div>
    </main>
    </>
  );
}

export default App;
