import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Titulo from './components/Titulo/Titulo';
//import ComponentContainer from './components/ComponentContainer/ComponentContainer';
import NavBar from './components/Menu/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Menu(parametro1, parametro2, .....)

/*const Formulario = () => {
  return (
    <form className='form-control'>
      <Titulo titulo='Titulo de form' subTitulo='Esto es subtitulo de form' />
      <input type='text' />
      <button>Enviar</button>
    </form>
  )
}*/

function App() {
  //let contenido = 'Esto es contenido de app' // Estado
  //let tituloApp = 'Esto es titulo de app'
  let saludo = 'Bienvenidos a mi Tienda de Informatica'

  return (
    <>
      <NavBar /*param1={contenido} parametro2='contenido de app'*/ />
      <ItemListContainer saludo={saludo} />
      {/*<Titulo titulo={tituloApp} subTitulo='Esto es subtitulo de app'>
        <ComponentContainer />
      </Titulo>*/}
    </>
  )
}

export default App
