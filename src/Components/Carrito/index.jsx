import React, { useState } from "react";
import "./Carrito.css";
import { useCarrito } from "../Context/CarritoContext";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Carrito = ({ VariarCarrito }) => {
    const { carrito, eliminarDelCarrito } = useCarrito();
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");

    const enviarPedido = () => {
        if (!nombre || !direccion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const productosTexto = carrito
            .map(item => `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString()}`)
            .join("%0A"); // %0A es un salto de línea en URL

        const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

        const mensaje = `Hola, soy ${nombre} y me gustaría hacer el siguiente pedido:%0A
        ${productosTexto}%0A
        Dirección: ${direccion}%0A
        Total: $${total.toLocaleString()}`;

        const numeroWhatsApp = "+573225893262"; // número de WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        window.open(url, "_blank");
    };

    return (
        <section className="carrito">
            <div style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                <IoMdCloseCircle className="botoncerrar" size={35} onClick={VariarCarrito} />
                <h2 style={{fontWeight:"500"}}>Carrito de Compras</h2>
            </div>

            {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <p>Tu pedido es:</p>
                    <ul>
                        {carrito.map((item) => (
                            <li key={item.id} style={{textAlign:"start"}}>
                                {item.nombre} x {item.cantidad} <br /> 
                                ${(item.precio * item.cantidad).toLocaleString()}
                                <button onClick={() => eliminarDelCarrito(item.id)}>
                                    <MdDeleteForever size={30} />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3 style={{marginBottom:"5em"}}>Total: ${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toLocaleString()}</h3>
                </>
            )}

            <form className="formulario" onSubmit={(e) => e.preventDefault()}>
                <h3>Ingresa tus datos</h3>
                <input 
                    placeholder="Tu nombre completo" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
                <input 
                    placeholder="Dirección (Inlcuye tu ciudad)" 
                    value={direccion} 
                    onChange={(e) => setDireccion(e.target.value)} 
                />
                <button className="botonWhats" onClick={enviarPedido}>
                    Enviar pedido por WhatsApp
                </button>
            </form>
        </section>
    );
};

export default Carrito;
