import { useState } from 'react';
import Header from './componentes/header/Header';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores]=useState([])

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  // registrar colaborador. aqui ya lo estamos trayendo de formulario
const registrarColaborador =(colaborador)=>{
  console.log("Nuevo colaborador", colaborador)
  actualizarColaboradores([...colaboradores, colaborador])
}

  // Lista de equipos. 
  const equipos=
  [ 
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario:"#d9f7e9"
    },
    
    {
      titulo:"Front End",
      colorPrimario: "#82cffa",
      colorSecundario:"#e8f8ff"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#a6d157",
      colorSecundario:"#f0f8e2"
    },
    {
      titulo:"Devops",
      colorPrimario: "#e06b69",
      colorSecundario:"#fde7e8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario:"#fae9f5"
    },
    {
      titulo:"Movil",
      colorPrimario: "#ffba05",
      colorSecundario:"#fff5d9"
    },
    {
      titulo:"Innovación y Gestion",
      colorPrimario: "#ff8a29",
      colorSecundario:"#ffeedf"
    },
  ]
 
  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}  
          registrarColaborador={registrarColaborador}
          />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
       equipos.map((equipo)=> <Equipo 
       datos={equipo} 
       key={equipo.titulo} 
       colaboradores={colaboradores}
       />)
      }
      <Footer/>
    </div>
  );
}

export default App;







