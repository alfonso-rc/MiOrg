import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo =(props)=>{
const {colorPrimario,colorSecundario,titulo}= props.datos
const {colaboradores, eliminarColaborador}=props//aqui recibimos

const colSecun={backgroundColor:colorSecundario}
const colPrim={borderColor:colorPrimario}

return <>
   { colaboradores.length>0 &&
     <section className="equipo"style={colSecun}>
          <h3 style={colPrim}>{titulo}</h3>
           <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=> <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}//aqui lo enviamos
                    />)
                }
           </div>
        </section>
   }</>
}

export default Equipo;
