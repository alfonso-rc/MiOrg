import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario =(props)=>{
  const [nombre, actulizarNombre] = useState()
  const [puesto, actulizarPuesto] = useState()
  const [foto, actulizarFoto]     = useState()
  const [equipo, actualizarEquipo]= useState()

  const {registrarColaborador}=props

  const manejarEnvio =(e)=>{
    e.preventDefault()
    const enviarDatos = 
      {
        nombre,
        puesto,
        foto,
        equipo
      }
      //funcion de app y la traemos a formulario para enviar los datos a app
      registrarColaborador(enviarDatos)

  }
  return <section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador</h2>
      <CampoTexto 
          titulo="Nombre" place="Ingresar Nombre" 
          required={true}
          valor={nombre}
          actualizarValor={actulizarNombre}
      />
      <CampoTexto 
          titulo="Puesto"place="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={actulizarPuesto}
      />
      <CampoTexto 
          titulo="Foto"place="Ingresar enlace de Foto" 
          required
          valor={foto}
          actualizarValor={actulizarFoto}
      />
      <ListaOpciones 
           valor={equipo} 
           actualizarEquipo={actualizarEquipo}
           equipos={props.equipos}
      />
      <Boton>
        Crear
      </Boton>
    </form>
  </section>
}
export default Formulario

















