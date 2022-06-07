import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Menu/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  let saludo = 'Bienvenidos a mi Tienda de Informatica'

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={saludo} />
      <hr />
      <ItemCount stock="7" initial="1" />
    </>
  )
}

export default App
