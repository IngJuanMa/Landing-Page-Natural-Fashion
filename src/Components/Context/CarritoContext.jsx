import { createContext, useState, useContext } from "react";

// Crear el contexto
const CarritoContext = createContext();

// Hook personalizado para acceder al contexto
export const useCarrito = () => useContext(CarritoContext);

// Proveedor del carrito
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito con cantidad
    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find((item) => item.id === producto.id);
            if (existe) {
                return prevCarrito.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
                );
            }
            return [...prevCarrito, { ...producto, cantidad: producto.cantidad }];
        });
    };

    //Función para agregar producto con unidad

    const agregarUNidadAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const productoExistente = prevCarrito.find((item) => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id));
    };

    // Función para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito,agregarUNidadAlCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
