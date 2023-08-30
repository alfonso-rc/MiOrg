import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo =(props)=>{
const {colorPrimario,colorSecundario,titulo}= props.datos
const {colaboradores}=props

const colSecun={backgroundColor:colorSecundario}
const colPrim={borderColor:colorPrimario}

return <section className="equipo"style={colSecun}>
          <h3 style={colPrim}>{titulo}</h3>
           <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=> <Colaborador
                    datos={colaborador}
                    key={index}/>)
                }
           </div>
        </section>
}

export default Equipo;
