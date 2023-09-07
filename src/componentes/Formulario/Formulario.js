import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario =(props)=>{
  const [nombre, actulizarNombre] = useState()
  const [puesto, actulizarPuesto] = useState()
  const [foto, actulizarFoto]     = useState()
  const [equipo, actualizarEquipo]= useState()

  const [titulo, actualizarTitulo] = useState("")
  const[color, actualizarColor] = useState("")

  const {registrarColaborador, crearEquipo}=props

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
  const manejarNuevoEquipo =(e)=>{
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
  }

  return <section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador</h2>
      <Campo 
          titulo="Nombre" place="Ingresar Nombre" 
          required={true}
          valor={nombre}
          actualizarValor={actulizarNombre}
      />
      <Campo 
          titulo="Puesto"place="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={actulizarPuesto}
      />
      <Campo 
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
    <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el Equipo</h2>
      <Campo 
          titulo="Titulo" place="Ingresar Titulo" 
          required={true}
          valor={titulo}
          actualizarValor={actualizarTitulo}
      />
      <Campo 
          titulo="Color"place="Ingresar  Color Hexadecimal"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
      />
      <Boton>
        Registrar Equipo
      </Boton>
    </form>
  </section>
}
export default Formulario

















