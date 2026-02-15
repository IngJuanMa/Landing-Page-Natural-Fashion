import React from "react";
import "./Home.css";
import { FaTruckMoving, FaW } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import CartaBienvenida from "../../Components/CartaBienvenida";

const Subir = (delay) => {
    return {
        initial: {
            y: "100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            },
        },
    };
};


function Home() {
    return (
        <>
            <main id="inicio" >
                <section className="contenedor"  >
                    {/* <div className="c-textos" style={{border:"2px solid blue"}} > */}

                    <motion.small
                        variants={Subir(0.5)}
                        initial="initial"
                        whileInView="animate"
                        style={{ fontWeight: "400", fontSize: "0.8em", marginBottom: "0px", }}>
                        En Natural Fashionk somos
                    </motion.small>

                    <motion.h2
                        variants={Subir(0.5)}
                        initial="initial"
                        whileInView="animate"
                        style={{ fontSize: "1.8em", marginBottom: "0.5em", marginTop: "0" }}
                    >
                        {/* <small style={{ fontWeight: "200", fontSize: "0.6em", marginBottom: "0px" }}>
                                En Natural Fashionk somos
                            </small> <br></br> */}
                        Belleza con esencia
                    </motion.h2>

                    <motion.div
                        variants={Subir(0.5)}
                        initial="initial"
                        whileInView="animate"
                        style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <CartaBienvenida />
                    </motion.div>

                    {/* <motion.p
                            variants={Subir(0.7)}
                            initial="initial"
                            whileInView="animate"
                        > “Realza tu belleza con lo mejor de Natural Fashion ✨💄🌿
                            ¡Maquillaje de calidad para un look natural y radiante!”
                        </motion.p> */}

                    <div style={{ display: "flex", width: "80%", justifyContent: "space-between", marginTop: "1em", padding: "0 2em" }}>
                        <motion.div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                            variants={Subir(0.5)}
                            initial="initial"
                            whileInView="animate">
                            <FaTruckMoving style={{ fontSize: "1.3em", color: "#4A1D72", marginBottom: "8px" }} />
                            <h5 style={{ margin: "0", fontWeight: "600" }}>Envío rápido</h5>
                            <small style={{ fontSize: "0.7em" }}>24 a 36 horas</small>
                        </motion.div>

                        <motion.div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                            variants={Subir(0.5)}
                            initial="initial"
                            whileInView="animate">
                            <IoLogoWhatsapp style={{ fontSize: "1.3em", color: "#4A1D72", marginBottom: "8px" }} />
                            <h5 style={{ margin: "0", fontWeight: "600" }}>Pedido eficaz</h5>
                            <small style={{ fontSize: "0.7em" }}>Vía WhatsApp</small>
                        </motion.div>
                    </div>

                    {/* <motion.h3
                            variants={Subir(0.7)}
                            initial="initial"
                            whileInView="animate">
                            Con envío gratis
                            <MdDeliveryDining />
                        </motion.h3> */}

                    {/* <motion.button
                            variants={Subir(0.6)}
                            initial="initial"
                            whileInView="animate"
                            style={{ marginTop: "1.8em" }}>
                            <Link
                                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                                to='menu' smooth={true} duration={500} offset={-40} >
                                Compra ahora
                                <IoCartOutline style={{ marginLeft: "5px" }} />
                            </Link>

                        </motion.button> */}

                    {/* </div> */}

                    <div style={{ padding: "1px", width:"100%", backgroundColor: "#8c68a73b", marginTop:"2.5em" }} />
                </section>

            </main>
        </>
    );
}

export default Home;
