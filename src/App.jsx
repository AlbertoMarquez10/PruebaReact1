import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiApi from './componentes/MiApi'
import Buscador from './componentes/Buscador'
import { useState } from 'react'

const App = () => {
  const [personajes, setPersonajes] = useState([])
  const [buscarPersonaje, setBuscarPersonaje] = useState('')
  const [ordenar, setOrdenar] = useState('')

  const filtrarPor = personajes.filter((personaje) => {
    if (personaje.name.toLowerCase().includes(buscarPersonaje.toLocaleLowerCase()) ||
    personaje.gender.toLowerCase().includes(buscarPersonaje.toLocaleLowerCase()) ||
    personaje.status.toLowerCase().includes(buscarPersonaje.toLocaleLowerCase()) ||
    personaje.species.toLowerCase().includes(buscarPersonaje.toLocaleLowerCase())
    ) {
      return personaje
    }
  })
  const compararName = (a, b) => {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }
    return 0
  }
  const compararEspecie = (a, b) => {
    if (a.species > b.species) {
      return 1
    }
    if (a.species < b.species) {
      return -1
    }
    return 0
  }
  const compararGenero = (a, b) => {
    if (a.gender > b.gender) {
      return 1
    }
    if (a.gender < b.gender) {
      return -1
    }
    return 0
  }
  const OrderBy = () => {
    console.log(ordenar)
  }
  OrderBy()

  return (
    <>
      <h1 className='text-center mt-3 mb-3'>Rick & Morty - Uso de API</h1>
      <Buscador
        buscarPersonaje={buscarPersonaje}
        setBuscarPersonaje={setBuscarPersonaje}
        OrderByName={OrderBy}
        ordenar={ordenar}
        setOrdenar={setOrdenar}
      />
      <div className='contenedorPrincipal d-flex flex-column align-items-center'>
        <MiApi personajes={filtrarPor} setPersonajes={setPersonajes} />

      </div>
    </>
  )
}

export default App
