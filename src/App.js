import React, { Component } from 'react';
import './App.css';

// Components
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


class App extends Component {
  render() {
    return(
      <div className='App'>
        <NavBar />
        <ItemListContainer />
      </div>
    )
  }

}

export default App;
