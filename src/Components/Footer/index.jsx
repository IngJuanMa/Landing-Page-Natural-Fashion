import "./Footer.css"
import { FaLinkedin } from "react-icons/fa";
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

const Footer = () => {
    return (
        <>
            <footer>
                <motion.div
                    variants={lado(0.2)}
                    initial="initial"
                    whileInView="animate">
                    <p>📍 Ubicación: <br /> Barrion La Unión  Oporapa-Huila</p>
                    <p>📞 Teléfono: +57 322 8611816</p>
                </motion.div>

                <motion.div
                    variants={lado(0.4)}
                    initial="initial"
                    whileInView="animate">
                    <a
                        href="https://www.linkedin.com/in/juan-manuel-castro-chavarro-9b0128262/" target="_blank" rel="noopener noreferrer"
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", fontSize: "0.7em", textDecoration: "none", color: "var(--color-blanco)" }}>
                        DesingBy: IngJuanMa < FaLinkedin />
                    </a>
                    <p className="derecho">© 2025 Arreboles. Todos los derechos reservados.</p>
                </motion.div>
            </footer>

        </>
    )
}

export default Footer;