import React from 'react'
import "./Nav.css"
import { GoHomeFill } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaCartShopping } from "react-icons/fa6";
import { RiFlowerFill } from "react-icons/ri";



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

const Nav = ({ VariarCarrito }) => {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='barranav'
        >

            <section className='barranavbotones'>
                <motion.div
                    variants={bajar(0.3)}
                    initial="initial"
                    whileInView="animate"
                    style={{ cursor: "pointer" }}>
                    <Link
                        className='link'
                        to='inicio' smooth={true} duration={500} offset={-40} activeClass='activo'>
                        <GoHomeFill size={23} />
                    </Link>
                </motion.div>

                <motion.div
                    variants={bajar(0.5)}
                    initial="initial"
                    whileInView="animate"
                    style={{ cursor: "pointer" }}>
                    <Link
                        to='menu' smooth={true} duration={500} offset={-40}>
                        <FaBagShopping size={23} />
                    </Link>
                </motion.div>

                <motion.div
                    variants={bajar(0.7)}
                    initial="initial"
                    whileInView="animate"
                    style={{ cursor: "pointer" }}>
                    <Link
                        to='ramo' smooth={true} duration={500} offset={-40}>    
                        <RiFlowerFill size={23} />
                    </Link>
                </motion.div>

                <motion.div
                    variants={bajar(0.7)}
                    initial="initial"
                    whileInView="animate"
                    style={{ cursor: "pointer" }}>
                    <Link
                        to='nosotros' smooth={true} duration={500} offset={-40}>
                        <FaCircleUser size={23} />
                    </Link>
                </motion.div>

            </section>

            {/* <section className='logocarrito'>
                <motion.a
                    variants={bajar(0.7)}
                    initial="initial"
                    whileInView="animate"
                    onClick={VariarCarrito}
                    style={{ cursor: "pointer" }}
                >
                    <FaCartShopping size={30} />
                </motion.a>
            </section> */}

        </motion.nav>
    )
}

export default Nav
