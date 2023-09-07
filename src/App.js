import { useState } from 'react';
import { v4 as uuid} from 'uuid'
import Header from './componentes/header/Header';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores]=useState([{
      id: uuid(),
      equipo: "Front End",
      foto:   "http://github.com/harlandlohora.png",//
      nombre: "Harland Lohora",
      puesto: "instructor",
      fav: true
    },
     {
      id: uuid(),
      equipo: "Programación",
      foto:   "http://github.com/alfonso-rc.png",//
      nombre: "Genesys Rondon",
      puesto: "Dearrolladora de software e instructora",
      fav: false
    },
     {
      id: uuid(),
      equipo: "UX y Diseño",
      foto:   "http://github.com/jeanmarieAluraLatam.png",//
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora Alura",
      fav: false
    },
     {
      id: uuid(),
      equipo: "Programación",
      foto:   "http://github.com/christianpva.png",//
      nombre: "Christian Velasco",
      puesto: "Head e  instructor Alura",
      fav: false
    },
     {
      id: uuid(),
      equipo: "Innovación y Gestion",
      foto:   "http://github.com/JoseDarioGonzalezCha.png",//
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }])
  const [equipos,actualizarEquipos]=useState([{
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57c278",
        colorSecundario:"#d9f7e9"
      },
      
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario: "#82cffa",
        colorSecundario:"#e8f8ff"
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario: "#a6d157",
        colorSecundario:"#f0f8e2"
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario: "#e06b69",
        colorSecundario:"#fde7e8"
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario: "#db6ebf",
        colorSecundario:"#fae9f5"
      },
      {
        id: uuid(),
        titulo:"Movil",
        colorPrimario: "#ffba05",
        colorSecundario:"#fff5d9"
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestion",
        colorPrimario: "#ff8a29",
        colorSecundario:"#ffeedf"
      }])

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario)
  }
  // registrar colaborador. aqui ya lo estamos trayendo de formulario
const registrarColaborador =(colaborador)=>{
  console.log("Nuevo colaborador", colaborador)
  actualizarColaboradores([...colaboradores, colaborador])
}
  // Eliminar colaborador.
const elimarColaborador=(id)=>{
  console.log("elimnar colaborador",id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
}
//Actualizar color de equipo
const actualizarColor = (color,id)=>{
  console.log("Actualizar: ",color, id)
  const equiposActualizados = equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

// Crear equipo
const crearEquipo=(nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo,id:uuid}])
}

// funcion like
const like = (id) => {
  console.log("like",id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
}
 
  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}  
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
       equipos.map((equipo)=> <Equipo 
       datos={equipo} 
       key={equipo.titulo} 
       colaboradores={colaboradores.filter(
        colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={elimarColaborador}
        actualizarColor={actualizarColor}
        like={like}
       />)
      }
      <Footer/>
    </div>
  );
}

export default App;







