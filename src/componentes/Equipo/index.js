import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo =(props)=>{
const {colorPrimario,titulo,id}= props.datos
const {colaboradores, eliminarColaborador,actualizarColor, like } = props//aqui recibimos

const colSecun={backgroundColor: hexToRgba(colorPrimario, 0.5)}
const colPrim={borderColor:colorPrimario}

return <>
   { colaboradores.length>0 &&
     <section className="equipo"style={colSecun}>
          <input 
               type="color"
               className="input-color"
               value={colorPrimario}
               onChange={(e)=>{
                    actualizarColor(e.target.value,id)
               }}          
          
          />
                    <h3 style={colPrim}>{titulo}</h3>
           <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=> <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}//aqui lo enviamos
                    like = {like}
                    />)
                }
           </div>
        </section>
   }</>
}

export default Equipo;
