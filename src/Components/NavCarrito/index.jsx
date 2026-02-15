import React from 'react'
import "./navCarrito.css"
import { GoHomeFill } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaCartShopping } from "react-icons/fa6";


const bajar = (delay) => {
    return {
        initial: {
            y: "-100%",
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

const NavCarrito = ({ VariarCarrito }) => {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='barranavCarrito'
        >
            <section >
                <motion.a
                    variants={bajar(0.7)}
                    initial="initial"
                    whileInView="animate"
                    href='https://www.instagram.com/natural_fashionk/'
                    style={{ cursor: "pointer" }}
                >
                    <img src="/logo.png" alt="logotipo Natural FashionK" className='imagenCarrito' />
                </motion.a>
            </section>

            <section >
                <motion.small
                    variants={bajar(0.7)}
                    initial="initial"
                    whileInView="animate"
                    href='https://www.instagram.com/natural_fashionk/'
                    style={{ color: "#6f1382", fontWeight:"800" }}
                >
                    Natural Fashionk
                </motion.small>
            </section>

            <section className='logocarritoNav'>
                <motion.a
                    variants={bajar(0.7)}
                    initial="initial"
                    whileInView="animate"
                    onClick={VariarCarrito}
                    style={{ cursor: "pointer" }}
                >
                    <FaCartShopping
                        size={25}
                        style={{ color: "#753682" }} />
                </motion.a>
            </section>

        </motion.nav>
    )
}

export default NavCarrito