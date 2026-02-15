import React from "react";
import "./Nosotros.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { motion } from "framer-motion";


const lado = (delay) => {
  return {
    initial: {
      x: "-100%",
      opacity: 0,
      hidden: "hidden",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

const ladoiz = (delay) => {
  return {
    initial: {
      x: "100%",
      opacity: 0,
      hidden: "hidden",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

const Subir = (delay) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
      hidden: "hidden",
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

function Nosotros() {
  return (
    <section id="nosotros" className="S-nostros" style={{marginBottom:"3em"}}>
      <h1 className="sobre_nosotros">Sobre Nosotras</h1>
      <small className="sobre_nosotros_sub">Conoce un poco más de nuestra historia  </small>
      <div className="border"></div>

      <div className="C-uno">

        <div>
          <motion.h2
            variants={Subir(0.3)}
            initial="initial"
            whileInView="animate" style={{ fontSize: "1.2em", marginTop:"0px" }}>
            "Creemos en el maquillaje como una forma de expresión, seguridad y estilo, por eso ofrecemos productos cuidadosamente seleccionados, modernos y de excelente calidad".
          </motion.h2>

          <motion.p
            variants={Subir(0.5)}
            initial="initial"
            whileInView="animate"
          >Somos una marca creada con amor en el año 2020, dedicada a resaltar la belleza natural de cada mujer.
          </motion.p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "20px", paddingBottom: "0px" }} >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="img1"
            src="FotoDos.jpeg"
            alt="fotolocal" />

          {/* <motion.img
            variants={lado(0.3)}
            initial="initial"
            whileInView="animate"
            className="img2"
            src="cielo_azul.jpeg.jpg"
            alt="fotocieloazul" /> */}

          <motion.img
            variants={ladoiz(0.3)}
            initial="initial"
            whileInView="animate"
            className="img3"
            src="logo.png"
            alt="fotocieloazul" />

        </div>

      </div>

      <div className="section-logo" style={{ display: "flex", alignItems: "center" }}>

        <motion.p
          variants={Subir(0.3)}
          initial="initial"
          whileInView="animate"
          style={{ padding: "10px", fontSize: "0.8em", marginTop: "0px", textAlign: "center", fontStyle: "italic" }}>
          Natural Fashion nace del sueño de dos emprendedoras que creen en la elegancia, el cuidado personal y 
          en hacer sentir especial a cada clienta, porque para nosotras el maquillaje no solo embellece; <strong>empodera.</strong> 
        </motion.p>
      </div>

      <motion.p
        variants={Subir(0.4)}
        initial="initial"
        whileInView="animate" style={{fontStyle:"Italic", fontWeight:"Bolder", marginBottom:"0px"}}>
       ! Gracias por tu visita ¡
      </motion.p>

      <motion.p
        variants={Subir(0.3)}
        initial="initial"
        whileInView="animate">
        sigue nuestras redes sociales
      </motion.p>

      <div style={{ display: "flex", width: "50%", justifyContent: "space-evenly" }}>
        <motion.a
          variants={lado(0.3)}
          initial="initial"
          whileInView="animate"
          style={{ color: "var(--color-marron)", textDecoration: "none", cursor: "pointer" }}
          href="https://www.instagram.com/natural_fashionk/" target="_blank" rel="noopener noreferrer" > <FaInstagram size={30} />
        </motion.a>

        <motion.a
          variants={lado(0.5)}
          initial="initial"
          whileInView="animate"
          style={{ color: "var(--color-marron)", textDecoration: "none", cursor: "pointer" }}
          href="https://www.facebook.com/share/17uAxeMfKQ/" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare size={30} />
        </motion.a>

        <motion.a
          variants={lado(0.7)}
          initial="initial"
          whileInView="animate"
          style={{ color: "var(--color-marron)", textDecoration: "none", cursor: "pointer" }}
          href="https://wa.me/573225893262" target="_blank" rel="noopener noreferrer"> <ImWhatsapp size={30} />
        </motion.a>
      </div>

    </section>
  );
}

export default Nosotros;
