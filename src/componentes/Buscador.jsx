const Buscador = ({ buscarPersonaje, setBuscarPersonaje, OrderBy, ordenar, setOrdenar }) => {
  // Captura el dato buscado en el evento de escribir en el input
  const busquedaDato = (e) => { setBuscarPersonaje(e.target.value) }
  const capturaOrdenar = (e) => { setOrdenar(e.target.value) }
  return (
    <>
      <div className='d-flex col-9 justify-content-center ms-auto mx-auto mb-3'>
        <input
          className='form-control me-2 text-center'
          type='search'
          placeholder='Buscar personaje'
          value={buscarPersonaje}
          onChange={busquedaDato}
        />

      </div>
      <h2 className='text-center'>Ordenar</h2>
      <select name='ordenar' id='' className='d-flex col-3 justify-content-center ms-auto mx-auto mb-4' onChange={capturaOrdenar}>
        <option value='-'>-</option>
        <option value={ordenar}>Por Nombre</option>
        <option value={ordenar}>Por Especie</option>
        <option value={ordenar}>Por Genero</option>
      </select>

    </>
  )
}
export default Buscador
