const Buscador = ({buscarPersonaje, setBuscarPersonaje, OrderByName}) => {
  
   
  //Captura el dato buscado en el evento de escribir en el input
  const busquedaDato = (e)=>{
    setBuscarPersonaje(e.target.value)
   
  }
 

  return (
    <>
      <div className="d-flex col-9 justify-content-center ms-auto mx-auto mb-3">
        <input 
        className="form-control me-2 text-center" 
        type="search" 
        placeholder="Buscar personaje"
        value={buscarPersonaje}
        onChange={busquedaDato}/>

      </div>
      <h2
        onClick={OrderByName}
      >Ordenar por Nombre</h2>
    </>
  )
}

export default Buscador