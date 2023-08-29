import "./CampoTexto.css"

const CampoTexto =({titulo, place, required,valor,actualizarValor})=>{
  
  const manejarCambio =(e) => {
    actualizarValor(e.target.value) //
  }
  return <div className="campo-texto">
     <label>{titulo}</label>
     <input placeholder={place} 
            required={required} 
            value={valor}
            onChange={manejarCambio}
            /> 
  </div>
}
export default CampoTexto;