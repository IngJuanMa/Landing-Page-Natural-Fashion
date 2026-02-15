import CardProduct from "../../Components/CardProduct";
import CardNav from "../../Components/CardNavCategoria";
import "./Productos.css"
import { IoCartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCarrito } from "../../Components/Context/CarritoContext";
import { IoClose } from "react-icons/io5";
import { IoExpandOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa";



// Array con info de productos destacados
const PDestacados = [
  {
    id: 1,
    nombre: "Kit labios",
    precio: "40000",
    descripcion: "Incluye 6 productos para labios + pinza mariposa (por tiempo limitado)",
    imagen: "/products/kit_labios.png"
  },
  {
    id: 2,
    nombre: "Kit de barbie Vaquera",
    precio: "10000",
    descripcion: "Define, alarga y realza tu mirada al instante ",
    imagen: "/products/1.png"
  },
  {
    id: 3,
    nombre: "Ramo Rosa",
    precio: "80000",
    descripcion: "Un detalle muy bonito para regalar en las fechas especiales.",
    imagen: "/products/Ramo_rosa.png"
  }
]

//Array de ramos y demás

const Ramos = [
  {
    id: 1,
    nombre: "Ramo con rosas",
    precio: "90000",
    descripcion: "Rosas, delineador, labial y 8 productos más",
    imagen: "/products/ramo.png"
  },
  {
    id: 2,
    nombre: "Ramo Pink",
    precio: "100000",
    descripcion: "10 productos para cuidado facil",
    imagen: "/products/Ramo_rosa.png"
  },
  {
    id: 3,
    nombre: "Ramo Aura intensa",
    precio: "110000",
    descripcion: "Un regalo sorprendente con 9 productos para el cuidado de la piel incluyendo 3 labiales.",
    imagen: "/products/morado.png"
  }
]

// Array con info de productos de las Categorías de productos

const ListaProductos = [
  {
    id: 1,
    nombre: "Labiales",
    color: "#FA951D",
    imagen: "/products/Labial.png"
  },
  {
    id: 2,
    nombre: "Delineadores",
    color: "#FFCC16",
    imagen: "/products/Delineador.png"
  },
  {
    id: 3,
    nombre: "Rostro",
    color: "#AC6C14",
    imagen: "/products/Rostro.png"
  },
  {
    id: 4,
    nombre: "Piel",
    color: "#F1E1BE",
    imagen: "/products/Piel.png"
  },
  {
    id: 5,
    nombre: "Accesorios",
    color: "#F66222",
    imagen: "/products/Accesorios.png"
  }
]

// Array con info detallada de los productos

const ProductosUno = [
  {
    id: 1,
    nombre: "BALM trendy",
    precio: "14000",
    ingredientes: "Contiene 1 brillo mágico y 1 labial en barra mate",
    imagen: "/products/BALM.png",
    categoria: "Labiales"
  },
  {
    id: 2,
    nombre: "Aretes Stich",
    precio: "16000",
    ingredientes: "5 Dijes con diseños a color o siluetas plateadas en diferentes formas y tamaños",
    imagen: "/products/stich.png",
    categoria: "Accesorios"
  },
  {
    id: 3,
    nombre: "Retro Gloss Trendy",
    precio: "7000",
    ingredientes: "Tonos nudes, rosas y rojos",
    imagen: "/products/retrogloss.png",
    categoria: "Labiales"
  },
  {
    id: 4,
    nombre: "Tinta School",
    precio: "12000",
    ingredientes: "A base de agua con tono rojizo.",
    imagen: "/products/tintashool.png",
    categoria: "Labiales"
  },
  {
    id: 5,
    nombre: "Gloss Holo Glam",
    precio: "11000",
    ingredientes: "Brillo de labios holo gram de trendy. Tono 02",
    imagen: "/products/gloss_2.png",
    categoria: "Labiales"
  },

  // Delineadores
  {
    id: 6,
    nombre: "Lip Gloss Trendy",
    precio: "13000",
    ingredientes: "Lápiz delineador de punta tajable y fórmula cremosa de excelente pigmentación",
    imagen: "/products/Gloss.png",
    categoria: "Delineadores"
  },
  {
    id: 7,
    nombre: "Delineador Trendy Pin Up",
    precio: "16000",
    ingredientes: "A prueba de agua, sudor o calor con punta fina para fácil aplicación, colo negro.",
    imagen: "/products/plumon.png",
    categoria: "Delineadores"
  },
  {
    id: 8,
    nombre: "Deliniador Doble Cat Eye",
    precio: "16000",
    ingredientes: "Delineador doble punta de color negro, en un lado un plumon de trazos finos y en el otro una estampita de cola de gato",
    imagen: "/products/cat.png",
    categoria: "Delineadores"
  },
  {
    id: 9,
    nombre: "La Doble (Patacón)",
    precio: "20000",
    ingredientes: "Pan brioche, carne artesanal 120g doble, cebolla caramelizada, verduras frescas, ripio, quesodoble",
    imagen: "/products/Ham-Patacon.png",
    categoria: "H-Patacon"
  },
  {
    id: 10,
    nombre: "La Atómica (Patacón)",
    precio: "21000",
    ingredientes: "Pan brioche, carne artesanal 120g, chorizo, tocineta, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/products/Ham-Patacon.png",
    categoria: "H-Patacon"
  },

  //Rostro
  {
    id: 11,
    nombre: "Sombras Sunset",
    precio: "27000",
    ingredientes: "Contiene los tonos de acabado mate, tonos tierra, negro y tonos satinados (Dorado, rosa y gris oscuro)",
    imagen: "/products/sunset.png",
    categoria: "Rostro"
  },
  {
    id: 12,
    nombre: "Primer Rosas Grande 60ml",
    precio: "17000",
    ingredientes: "Formula hidrantante y suave con la piel, No obstruye los poros, puedes usarla todos los días",
    imagen: "/products/primer.png",
    categoria: "Rostro"
  },

  // Piel
  {
    id: 14,
    nombre: "Fijador Dreams 60ml",
    precio: "16000",
    ingredientes: "Mantén tu maquillaje intacto y a prueba de todo. Suave con tu piel. Con extracto de aloe vera, pepino y castaño de indias.",
    imagen: "/products/fijador.png",
    categoria: "Piel"
  },
  {
    id: 13,
    nombre: "Exótica",
    precio: "17000",
    ingredientes: "Papa natural estilo francesa, chorizo en trozos, tocineta, cebolla caramelizada,ripio,queso gratinado",
    imagen: "/products/choripapa.png",
    categoria: "Choripapas"
  },
  // Picadas
  {
    id: 15,
    nombre: "Picada Individual",
    precio: "22000",
    ingredientes: "Porcion de pollo asado, porción de carne, porción de chorizo, 2 nuggets de pollo, 180g de papa, plátanos y salsas",
    imagen: "/products/picada.png",
    categoria: "Picadas"
  },
  {
    id: 16,
    nombre: "Pica2",
    precio: "42000",
    ingredientes: "Doble porcion de pollo asado, doble porción de carne, 2 chorizos, 4 nuggets de pollo, 400g de papa, plátanos y salsas",
    imagen: "/products/picada.png",
    categoria: "Picadas"
  },

  //Adicionales
  {
    id: 17,
    nombre: "Papas Fritas",
    precio: "5000",
    ingredientes: "Porción de 250g, estilo francesa",
    imagen: "/products/papas.png",
    categoria: "Adicionales"
  },
  {
    id: 18,
    nombre: "Porción de carne ",
    precio: "5000",
    ingredientes: "Porción 120g de carne para hamburguesa artesanal",
    imagen: "/products/carne.png",
    categoria: "Adicionales"
  },
  {
    id: 19,
    nombre: "Porción pollo apanado",
    precio: "5000",
    ingredientes: "Porción de pollo apanado 130g",
    imagen: "/products/pollo.png",
    categoria: "Adicionales"
  },
  {
    id: 20,
    nombre: "Chorizo",
    precio: "5000",
    ingredientes: "Unidad chorizo las brisas",
    imagen: "/products/chorizo.png",
    categoria: "Adicionales"
  },

  //Bebidas

  {
    id: 21,
    nombre: "Agua en Botella",
    precio: "2000",
    ingredientes: "Botella PET en presentación 600ml",
    imagen: "/products/pool-agua.webp",
    categoria: "Bebidas"
  },
  {
    id: 22,
    nombre: "Coca Cola Personal",
    precio: "4000",
    ingredientes: "Botella tamaño PET tamaño personal 400ml",
    imagen: "/products/Coca.png",
    categoria: "Bebidas"
  },
  {
    id: 23,
    nombre: "Jugo Hit Personal",
    precio: "4000",
    ingredientes: "Botella tamaño PET tamaño personal 500ml",
    imagen: "/products/HitPer.png",
    categoria: "Bebidas"
  },
  {
    id: 24,
    nombre: "Jugo Hit Litro",
    precio: "5000",
    ingredientes: "Caja tamaño familiar de 1000mL",
    imagen: "/products/HitCaja.png",
    categoria: "Bebidas"
  }

]

const Categorias = ["Labiales", "Accesorios", "Delineadores", "Rostro", "Piel", "Adicionales", "Bebidas"]


function productos() {

  const numeroWhatsApp = "573225893262";

  const mensajeRamoPersonalizado = (ramo) => {
    const texto = `Hola! Quisiera un ramo personalizado.
${ramo ? `Me interesa algo similar a: ${ramo.nombre} ($${ramo.precio}).` : ""}
¿Me ayudas a armar uno con mi presupuesto y colores?`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const { agregarUNidadAlCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const [categoriaSeleccionada, SetCategoriaSeleccionada] = useState("Labiales");

  const [openModalRamo, setOpenModalRamo] = useState(false);
  const [ramoSeleccionado, setRamoSeleccionado] = useState(null);

  const abrirModalRamo = (ramo) => {
    setRamoSeleccionado(ramo);
    setOpenModalRamo(true);
  };

  const cerrarModalRamo = () => {
    setOpenModalRamo(false);
    setRamoSeleccionado(null);
  };

  // 👇 AQUÍ VA EL BLOQUEO DEL SCROLL
  useEffect(() => {
    if (openModalRamo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModalRamo]);


  const ProductosFiltrados = categoriaSeleccionada === "Todas"
    ? ProductosUno :
    ProductosUno.filter((prod) => prod.categoria === categoriaSeleccionada);

  const handleAgregar = (item) => {
    agregarUNidadAlCarrito(item);
    setMensaje(`Agregaste ${item.nombre}  al carrito`); // Mostrar mensaje
    setTimeout(() => setMensaje(""), 2000); // Ocultar mensaje después de 2 segundos
  };


  return (
    <section className="s-productos" >
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        Nuestros productos destacados
        <motion.small className="subtitulo_productos"
          style={{ fontWeight: "400", fontSize: "0.8em", marginBottom: "0px", }}>
          Conoce nuestros productos más vendidos
        </motion.small>
        <div className="guion" />
      </motion.h1>

      <div className="destacados ">
        {PDestacados.map((item) => {
          return (
            <>
              <motion.article
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="carta-destacado">
                <div className="seccion-foto-producto">
                  <div className="cuadro_fondo"></div>
                  <img src={item.imagen} alt="ramo" style={{ width: "100px", maxHeight: "150px" }} />
                </div>
                <div className="seccion-info-producto">
                  <h3 style={{ fontSize: "1em", marginBottom: "0.3em", marginTop: "0.2em" }}>{item.nombre}</h3>
                  <small style={{ fontSize: "0.8em", marginBottom: "0.5em" }}>{item.descripcion}</small>
                  <small style={{ fontWeight: "700", textAlign: "cen", fontSize: "1em", paddingRight: "20px", marginBottom: "0.6em" }}> ${item.precio}</small>
                  <button onClick={() => handleAgregar(item)} className="boton-comprar-destacado" style={{ fontSize: "0.8em", marginBottom: "0.5em", width: "70%", marginLeft: "15%" }}>Agregar  <FaCartShopping /> </button>
                </div>

                {mensaje && (
                  <motion.div
                    className="mensaje-agregado"
                    style={{ zIndex: "9999" }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mensaje}
                  </motion.div>
                )}
              </motion.article>
            </>
          )
        })}
      </div>

      {/* 
      <h1 className="titulomen" style={{ marginTop: "2em" }} >Conoce nuestro Menú</h1>
      <p className="titutlocategorías">Categorías</p> */}

      <div id="menu" style={{ padding: "1px", width: "100%", backgroundColor: "#8c68a73b", marginTop: "2.5em" }} />

      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: "2.2em", fontWeight: "900" }}>
        Conoce todo nuestro catálogo
        <motion.small className="subtitulo_productos"
          style={{ fontWeight: "400", fontSize: "0.8em", marginBottom: "0px", }}>
          Selecciona la categoría que prefieras
        </motion.small>
        <div className="guion" />
      </motion.h1>

      {/* código para generar las categorías dinámicamente
        a partir del array:"ListaProductos" */}

      <nav className="listaproductos" >
        <div
          className="carruselproduc">
          {
            ListaProductos.map((item) => {
              return (
                <a
                  key={item.id}
                  onClick={() => SetCategoriaSeleccionada(item.nombre)}
                  className={`itemproducto ${categoriaSeleccionada === item.nombre ? "active" : ""}`}>
                  <CardNav
                    Activa={categoriaSeleccionada === item.nombre}
                    color={item.color}
                    nombre={item.nombre}
                    imagen={item.imagen} />
                </a>
              )
            })
          }
        </div>
      </nav>

      {/* Código para generar dinámicamente las cards de los Productos
        dependiendo de la categoría que el usuario elija */}

      <div className="CardsProductos">
        {ProductosFiltrados.map((item) => {
          return (
            <motion.div
              className="div"
              key={item.id}
              initial={{ opacity: 0, y: -50 }}  // Estado inicial (opacidad 0 y posición desplazada hacia abajo)
              whileInView={{ opacity: 1, y: 0 }}  // Animación cuando se monta
              transition={{ duration: 0.5, ease: "easeOut" }}  // Duración y tipo de animación
            >
              <CardProduct
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                ingredientes={item.ingredientes}
                imagen={item.imagen} />
            </motion.div>
          );
        })}

      </div>

      <div id="ramo" style={{ padding: "1px", width: "100%", backgroundColor: "#8c68a73b", marginTop: "2.5em" }} />

      {/* sección de los ramos */}

      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: "2.2em" }}>
        Nuestro hermosos ramos
        <motion.small className="subtitulo_productos"
          style={{ fontWeight: "400", fontSize: "0.8em", marginBottom: "0px", marginTop: "0.8em" }}>
          <strong >¡ Selecciona tu ramo preferido!</strong> <br></br> o envíanos un mensaje para armar uno a tu estilo y necesidad
        </motion.small>
        <div className="guion" />
      </motion.h1>

      <div className="destacados ">
        {Ramos.map((item) => {
          return (
            <>
              <motion.article
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="carta-destacado">
                <div className="seccion-foto-producto">
                  <div className="cuadro_fondo"></div>
                  <img src={item.imagen} alt="ramo" style={{ width: "100px", maxHeight: "150px" }} />
                  {/* ✅ Botón para abrir el modal */}
                  <button
                    className="btn-expand"
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirModalRamo(item);
                    }}
                    aria-label="Ver ramo en pantalla completa"
                    style={{ zIndex: "999" }}

                  ><IoExpandOutline size={18} />
                  </button>
                </div>
                <div className="seccion-info-producto">
                  <h3 style={{ fontSize: "1em", marginBottom: "0.3em", marginTop: "0.2em" }}>{item.nombre}</h3>
                  <small style={{ fontSize: "0.8em", marginBottom: "0.5em" }}>{item.descripcion}</small>
                  <small style={{ fontWeight: "700", textAlign: "cen", fontSize: "1em", paddingRight: "20px", marginBottom: "0.6em" }}> ${item.precio}</small>
                  <button onClick={() => handleAgregar(item)} className="boton-comprar-destacado" style={{ fontSize: "0.8em", marginBottom: "0.5em", width: "70%", marginLeft: "15%" }}>Agregar  <FaCartShopping /> </button>
                </div>

                {mensaje && (
                  <motion.div
                    className="mensaje-agregado"
                    style={{ zIndex: "9999" }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mensaje}
                  </motion.div>
                )}
              </motion.article>
            </>
          )
        })}
      </div>

      <motion.button
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="boton-whatsapp"
        onClick={() => mensajeRamoPersonalizado(ramoSeleccionado)}
        style={{
          width: "80%",
          marginTop: "10px",
          padding: "10px",
          borderRadius: "10px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        <FaComments style={{ marginRight: "0.5em" }} /> !Quiero un ramo personalizado¡
      </motion.button>

      <AnimatePresence>
        {openModalRamo && ramoSeleccionado && (
          <motion.div
            className="modal-overlay"
            onClick={cerrarModalRamo}
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
              <button className="modal-close" onClick={cerrarModalRamo} aria-label="Cerrar modal">
                <IoClose size={26} />
              </button>

              <div className="modal-body">
                <div className="modal-image-wrap">
                  <img
                    className="modal-image"
                    src={ramoSeleccionado.imagen}
                    alt={ramoSeleccionado.nombre}
                  />
                </div>

                {/* <div className="modal-info">
                  <h2 className="modal-title">{ramoSeleccionado.nombre}</h2>
                  <p className="modal-ingredientes">{ramoSeleccionado.descripcion}</p>

                  <h3 className="modal-price">
                    $ {Number(ramoSeleccionado.precio).toLocaleString()}
                  </h3>

                  <button
                    className="boton-comprar"
                    onClick={() => handleAgregar(ramoSeleccionado)}
                  >
                    <IoCartOutline size={25} />
                  </button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div  style={{ padding: "1px", width: "100%", backgroundColor: "#8c68a73b", marginTop: "2.5em" }} />
    </section >
  );
}

export default productos;
