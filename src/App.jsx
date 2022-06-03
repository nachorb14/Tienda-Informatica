import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Menu/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  let saludo = 'Bienvenidos a mi Tienda de Informatica'

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={saludo} />
    </>
  )
}

export default App
