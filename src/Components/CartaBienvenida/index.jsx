import React from 'react'
import "./CartaBienvenida.css"
import { section } from 'framer-motion/client';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-scroll";

const CartaBienvenida = () => {
    return (

        <section className='contenedo-carta-ramo'>
            <div className='card-bienvenida'>
                <h3>
                    Ramos Beauty
                </h3>

                <h1>
                    Tu regalo <span style={{ color: "#F1D874" }}> perfecto </span>
                </h1>

                <small style={{ textAlign: "start", marginBottom: "1em", color: "white", fontSize: "0.8em" }}>
                    Combina tus productos favoritos  <br /> en un regalo único y personalizado.
                </small>

                <div className='botones-card-bienvenida' style={{ fontSize: "0.7em" }}>
                    <Link 
                        to="ramo"
                        smooth={true}
                        duration={500}
                        offset={-40}
                        className='boton_ver_mas'
                        style={{
                            backgroundColor: "#F1D874", color: "#82559A"
                        }}
                    >
                        <FaCartShopping /> Quiero mi ramo
                    </Link>
                    {/* <button style={{ backgroundColor: "#F1D874", color: "#82559A" }}> <FaCartShopping /> Quiero mi ramo</button> */}
                    {/* <button style={{ border: "1px solid white", backgroundColor: "transparent", color: "white", fontWeight: "300" }}>
                            <Link to='menu' smooth={true} duration={500} offset={-40}> ver mas </Link>
                        </button> */}
                    <Link
                        to="menu"
                        smooth={true}
                        duration={500}
                        offset={-40}
                        className='boton_ver_mas'
                        style={{
                            border: "1px solid white",
                            backgroundColor: "transparent",
                            color: "white"
                        }}
                    >
                        ver más
                    </Link>


                </div>
            </div>

            <div className='ramo'>
                <img src="/ramo.png" alt="ramo" />
            </div>

        </section>
    );
};


export default CartaBienvenida;