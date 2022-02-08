import React from 'react';
import './App.css';


// Components
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



const App = ()=> {
  
    return(
      <div className='App'>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
    )

}

export default App;
