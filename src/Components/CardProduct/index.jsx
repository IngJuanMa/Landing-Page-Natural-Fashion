import React, { useState } from 'react'
import "./CardProduct.css"
import { IoCartOutline } from "react-icons/io5";
import { useCarrito } from '../Context/CarritoContext';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { IoExpandOutline } from "react-icons/io5";

const CardProduct = ({ id, nombre, ingredientes, precio, imagen }) => {

    const [Contador, SetContador] = useState(1);
    const SumarContador = () => SetContador(Contador + 1);
    const RestarContador = () => SetContador(Contador > 1 ? Contador - 1 : 1);
    const PrecionUnitario = precio;
    const precioTotal = (PrecionUnitario * Contador);
    const { agregarAlCarrito } = useCarrito();
    const [mensajeAgregado, setMensajeAgregado] = useState("");

    // ✅ Modal
    const [openModal, setOpenModal] = useState(false);
    const abrirModal = () => setOpenModal(true);
    const cerrarModal = () => setOpenModal(false);

    // Cerrar con Escape
    React.useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") cerrarModal();
        };
        if (openModal) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [openModal]);

    // Bloquear scroll del body cuando el modal está abierto
    React.useEffect(() => {
        if (openModal) document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, [openModal]);

    const handleAgregarAlCarrito = () => {
        if (Contador > 0) {
            agregarAlCarrito({ id, nombre, precio: PrecionUnitario, cantidad: Contador, imagen });
            SetContador(1);
            setMensajeAgregado(`${nombre} agregado al carrito ✅`);
            setTimeout(() => setMensajeAgregado(""), 2000);
        }
    };

    return (
        <>
            <article className='CardProducto' onClick={abrirModal} role="button" tabIndex={0}>
                <div style={{ height: "180px" }} className='seccion-foto-producto_2'>
                    <div className="cuadro_fondo_2"></div>
                    <img
                        src={imagen}
                        alt={nombre}
                        style={{ width: "165px", minHeight: "175px", padding: "0px" }}
                    />
                    {/* 🔍 Botón pantalla completa */}
                    <button
                        className="btn-expand"
                        onClick={(e) => {
                            e.stopPropagation();
                            abrirModal();
                        }}
                        aria-label="Ver en pantalla completa"
                    >
                        <IoExpandOutline size={18} />
                    </button>
                </div>

                <h4>{nombre}</h4>
                <p style={{ padding: "0.5em" }}>{ingredientes}</p>

                {/* ⚠️ Evita que al clickear botones se abra el modal */}
                <div className='contadorycomprar' onClick={(e) => e.stopPropagation()}>
                    <div className='contadorProducto'>
                        <button onClick={RestarContador} className='boton'>-</button>
                        <span style={{ fontWeight: "400" }}>{Contador}</span>
                        <button onClick={SumarContador} className='boton'>+</button>
                    </div>

                    <button className='boton-comprar' onClick={handleAgregarAlCarrito}>
                        <IoCartOutline size={25} />
                    </button>
                </div>

                <h4 style={{ fontWeight: "600" }}>$ {Contador > 0 ? precioTotal.toLocaleString() : precio}</h4>

                {mensajeAgregado && (
                    <motion.div
                        className="mensaje-agregado"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {mensajeAgregado}
                    </motion.div>
                )}
            </article>

            {/* ✅ MODAL */}
            <AnimatePresence>
                {openModal && (
                    <motion.div
                        className="modal-overlay"
                        onClick={cerrarModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.96, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.96, opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <button className="modal-close" onClick={cerrarModal} aria-label="Cerrar modal">
                                <IoClose size={26} />
                            </button>

                            <div className="modal-body">
                                <div className="modal-image-wrap">
                                    <img className="modal-image" src={imagen} alt={nombre} />
                                </div>

                                {/* <div className="modal-info">
                  <h2 className="modal-title">{nombre}</h2>
                  <p className="modal-ingredientes">{ingredientes}</p>

                  <h3 className="modal-price">$ {precio.toLocaleString()}</h3>

                  <div className="modal-actions">
                    <div className='contadorProducto'>
                      <button onClick={RestarContador} className='boton'>-</button>
                      <span style={{ fontWeight: "400" }}>{Contador}</span>
                      <button onClick={SumarContador} className='boton'>+</button>
                    </div>

                    <button className='boton-comprar' onClick={handleAgregarAlCarrito}>
                      <IoCartOutline size={25} />
                    </button>
                  </div>

                  {mensajeAgregado && (
                    <motion.div
                      className="mensaje-agregado"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {mensajeAgregado}
                    </motion.div>
                  )}
                </div> */}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default CardProduct;
