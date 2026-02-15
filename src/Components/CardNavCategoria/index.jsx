import React from 'react'
import "./CardNav.css"
import { MdOutlineExpandMore } from "react-icons/md";



const CardNav = ({nombre,color,imagen, Activa}) => {
    return (
        <article className={`CardNav ${Activa ? "active" : ""}`}>
            {/* <section className='s-foto' style={{ backgroundColor: color }}> */}
                <img src={imagen} className='imagen' />
              
            {/* </section> */}
            
                <h4 style={{fontWeight:"500", marginTop:"0.4em", fontSize:"0.8em"}}>{nombre}</h4>
                <p style={{margin:"0px"}} className='icono-activo' >
                    <MdOutlineExpandMore size={18}/>
                </p>
            
        </article>
    )
}

export default CardNav;