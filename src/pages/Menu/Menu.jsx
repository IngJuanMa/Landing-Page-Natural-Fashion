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
    precio: "50000",
    descripcion: "Súper kit de labios. Incluye 6 productos para labios + pinza mariposa",
    imagen: "/products/20.png"
  },
  {
    id: 2,
    nombre: "Kit Niñas Magia",
    precio: "21000",
    descripcion: "La formulación del bálsamo y de las sombras es creada especialmente para las mini Trendy lovers.🎀🫶🏽",
    imagen: "/products/102.png"
  },
  {
    id: 3,
    nombre: "Aura Gloss de Trendy",
    precio: "21000",
    descripcion: "Es el brillo de labios perfecto para un acabado jugoso, brillante y ligero. su fórmula hidratante evita la sensación pegajosa y deja los labios suaves. ",
    imagen: "/products/55.png"
  }
]

//Array de ramos y demás

const Ramos = [
  {
    id: 1,
    nombre: "Ramo con rosas",
    precio: "El precio depende de los artículos que selecciones",
    descripcion: "Rosas, delineador, labial y 8 productos más",
    imagen: "/products/ramo.png"
  },
  {
    id: 2,
    nombre: "Ramo Pink",
    precio: "El precio depende de los artículos que selecciones",
    descripcion: "10 productos para cuidado facil",
    imagen: "/products/Ramo_rosa.png"
  },
  {
    id: 3,
    nombre: "Ramo Aura intensa",
    precio: "El precio depende de los artículos que selecciones",
    descripcion: "Flores y maquillaje en un detalle elegante y perfecto para sorprender. 💕",
    imagen: "/products/ramo_final.png"
  }
]

// Array con info de productos de las Categorís de productos

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

  // Labiales
  {
    id: 1,
    nombre: "Labial Doble + Gloss",
    precio: "16000",
    ingredientes: "El dúo dinámico para un maquillaje de labios completo y de impacto",
    imagen: "/products/15.png",
    categoria: "Labiales"
  },
  {
    id: 2,
    nombre: "Tinta School",
    precio: "12000",
    ingredientes: "A base de agua pero en los labios se siente más especita. !Un tono rojizo Increíble¡",
    imagen: "/products/12.png",
    categoria: "Labiales"
  },
  {
    id: 3,
    nombre: "Retro Gloss Trendy",
    precio: "7000",
    ingredientes: "Tonos nudes, rosas y rojos. Algunos tienen un leves destellos sanitados, aportan un glow Increíble y sutil",
    imagen: "/products/13.png",
    categoria: "Labiales"
  },
  {
    id: 4,
    nombre: "Mini Matte",
    precio: "6500",
    ingredientes: "!Están de regreso¡. Una presentación hermosa, muy pigmentados y de excelente calidad.",
    imagen: "/products/11.png",
    categoria: "Labiales"
  },
  {
    id: 5,
    nombre: "Tigger Lips",
    precio: "8000",
    ingredientes: "Amado y vendito gloss de los 2000's. Una tendencia que durará para siempre",
    imagen: "/products/5.png",
    categoria: "Labiales"
  },
  {
    id: 6,
    nombre: "BALM (Doble Perfect Match)",
    precio: "13000",
    ingredientes: "Es un producto 2 en 1 para labios. Un brillo mágico y 1 labial en barra mate",
    imagen: "/products/91.png",
    categoria: "Labiales"
  },
  {
    id: 7,
    nombre: "Brillo Retáctil Beauty Glazed",
    precio: "16000",
    ingredientes: "Funciona como un esfero retráctil, solo debes realizar presión en la zona amarilla del empaque.",
    imagen: "/products/78.png",
    categoria: "Labiales"
  },
  {
    id: 8,
    nombre: "Hidratante Mágico Aloe Vera Trendy ",
    precio: "6000",
    ingredientes: "Gracias a sus extractos mágicos, le aporta a tus labios un color rosadito que se define según el pH de tu piel",
    imagen: "/products/39.png",
    categoria: "Labiales"
  },
  {
    id: 9,
    nombre: "Labial Cat Lips",
    precio: "15000",
    ingredientes: "¡La solución perfecta para hidratar tus labios!. Nutre, hidrata y suaviza tus labios dejándolos con un aspecto saludable.",
    imagen: "/products/42.png",
    categoria: "Labiales"
  },
  {
    id: 10,
    nombre: "Labiales Matte",
    precio: "8000",
    ingredientes: "Pan brioche, carne artesanal 120g, chorizo, tocineta, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/products/46.png",
    categoria: "Labiales"
  },
  {
    id: 11,
    nombre: "Delineador De Labios Individual Love Lips",
    precio: "11000",
    ingredientes: "Nos ayudan a enmarcar la forma natural de los labios haciendo que luzcan mucho más definidos con duración prolongada.",
    imagen: "/products/53.png",
    categoria: "Labiales"
  },
  {
    id: 12,
    nombre: "Kit Intensamente",
    precio: "26000",
    ingredientes: "El kit incluye un gloss voluminizador con destellos,un brillo de labios tono cerezay un delineador de labios",
    imagen: "/products/72.png",
    categoria: "Labiales"
  },
  {
    id: 13,
    nombre: "Aura Gloss de Trendy",
    precio: "21000",
    ingredientes: "es el brillo de labios perfecto para un acabado jugoso, brillante y ligero. Su fórmula hidratante evita la sensación pegajosa y deja los labios suaves",
    imagen: "/products/55.png",
    categoria: "Labiales"
  },
  {
    id: 14,
    nombre: "Bálsamo Labial Hidratante",
    precio: "6000",
    ingredientes: "Protege tus labios por completo con un solo producto.",
    imagen: "/products/54.png",
    categoria: "Labiales"
  },

  {
    id: 15,
    nombre: "Sweet Cream Gloss",
    precio: "7000",
    ingredientes: "Cinco formas diferentes de lucir tus labios. Un perfecto para cada ocasión o cada dí.",
    imagen: "/products/57.png",
    categoria: "Labiales"
  },
  {
    id: 16,
    nombre: "Brillo Holo Glam de Trendy",
    precio: "11000",
    ingredientes: "Le dan un acabado tornasol y jugoso a cualquier maquillaje de labios. Contienen un leve aroma a chicle.",
    imagen: "/products/96.png",
    categoria: "Labiales"
  },
  {
    id: 17,
    nombre: "Dúo Velvet",
    precio: "10000",
    ingredientes: "Su textura es ligera, son labiales lÃ­quidos, de acabado mate, semi cremoso. !Un dúo excepcional para tus labiosÂ¡",
    imagen: "/products/56.png",
    categoria: "Labiales"
  },
  {
    id: 18,
    nombre: "Lip Gloss Barbie Vaquera",
    precio: "16000",
    ingredientes: "Dale a tus labios un toque brillante y divertido con el Lip Gloss Edición Barbie Vaquera de Trendy. ",
    imagen: "/products/61.png",
    categoria: "Labiales"
  },
  {
    id: 19,
    nombre: "Brillo Gloss Kiss Lips Trendy",
    precio: "6000",
    ingredientes: "El brillo en los labios es obligatorio.Â¡Le agrega el plus ideal!. Aporta un brillo con color hermoso a tus labios.",
    imagen: "/products/62.png",
    categoria: "Labiales"
  },
  {
    id: 20,
    nombre: "Delineador De Labios Jumbo Cupcake",
    precio: "7000",
    ingredientes: "Los labios más definidos de la historia con un solo producto. Que tus delineadores de labios favoritos se acaben pronto ya no es un problema con los lápiz jumbo de Trendy.",
    imagen: "/products/97.png",
    categoria: "Labiales"
  },

  {
    id: 21,
    nombre: "Brillo Gloss Maddie ",
    precio: "16000",
    ingredientes: "Unos labios elegantes pero en tendencia. Un lip gloss con una tonalidad perfecta para cada dí, te llegan surtidos.",
    imagen: "/products/98.png",
    categoria: "Labiales"
  },
  {
    id: 22,
    nombre: "Gloss de textura suave",
    precio: "13000",
    ingredientes: "Un lip combo que será tu compañí a donde quiera que vayas gracias a su tamaño.",
    imagen: "/products/52.png",
    categoria: "Labiales"
  },

  // Delineadores
  {
    id: 23,
    nombre: "Delineador Trendy",
    precio: "5000",
    ingredientes: "Delineador cremoso, súper pigmentado.",
    imagen: "/products/3.png",
    categoria: "Delineadores"
  },
  {
    id: 24,
    nombre: "Delineador Doble Cat Eye",
    precio: "16000",
    ingredientes: "Delineador doble punta en color negro.En un extremo encuentras una estampita de â€œcola de gato y en el otro extremo tienes un plumón para lograr trazos finos.",
    imagen: "/products/90.png",
    categoria: "Delineadores"
  },
  {
    id: 25,
    nombre: "Delineador En Plumón Doble",
    precio: "16000",
    ingredientes: "Delineador doble punta en color negro.Viene con una punta delgada y otra punta mediana",
    imagen: "/products/73.png",
    categoria: "Delineadores"
  },

  {
    id: 26,
    nombre: "Delineador de Glitter",
    precio: "9000",
    ingredientes: "Realiza trazos pequeños hasta obtener la forma y saturación deseada.",
    imagen: "/products/43.png",
    categoria: "Delineadores"
  },
  {
    id: 27,
    nombre: "Delineador En Plumón Trendy Pin Up",
    precio: "16000",
    ingredientes: "El Delineador En Plumón Pin Up Trendy es a prueba de agua, sudor o calor. ",
    imagen: "/products/47.png",
    categoria: "Delineadores"
  },
  {
    id: 28,
    nombre: "Lápiz de ojos Trendy",
    precio: "13000",
    ingredientes: "El Delineador En Plumón Pin Up Trendy es a prueba de agua, sudor o calor. ",
    imagen: "/products/59.png",
    categoria: "Delineadores"
  },

  {
    id: 29,
    nombre: "Delineador Pearl Trendy",
    precio: "7000",
    ingredientes: "Dale un toque único y especial a tus looks con nuestros Delineadores Perlados. Excelente pigmentación, Acabado brillante.",
    imagen: "/products/99.png",
    categoria: "Delineadores"
  },
  {
    id: 30,
    nombre: "Kit X 2 Delineadores Stitch",
    precio: "20000",
    ingredientes: "Logra delineados de profesional con las herramientas correctas.",
    imagen: "/products/71.png",
    categoria: "Delineadores"
  },

  // Rostro

  {
    id: 31,
    nombre: "Polvos Premium Golden",
    precio: "27000",
    ingredientes: "Logra un acabado suave y completamente mate",
    imagen: "/products/16.png",
    categoria: "Rostro"
  },
  {
    id: 32,
    nombre: "Blush Donnut",
    precio: "13000",
    ingredientes: "Se adapta a todos los tonos de tu piel, es de alta pigmentación, muy suave y fácil de difunimar",
    imagen: "/products/17.png",
    categoria: "Rostro"
  },
  {
    id: 33,
    nombre: "Coctel de Cejas (Betún + polvo)",
    precio: "21000",
    ingredientes: "Es el producto perfecto para tus cejas. Vienen con un tono universal que le va muy bien a todos los tonos de piel.",
    imagen: "/products/10.png",
    categoria: "Rostro"
  },
  {
    id: 34,
    nombre: "Sombra Terra",
    precio: "16000",
    ingredientes: "Paleta ideal para looks diarios en tonos tierra",
    imagen: "/products/9.png",
    categoria: "Rostro"
  },
  {
    id: 35,
    nombre: "Contorno en barra doble con Rubor",
    precio: "16000",
    ingredientes: "Rubor y contorno de alta pigmentación que se acomoda perfectamente a todos los tonos de piel.",
    imagen: "/products/7.png",
    categoria: "Rostro"
  },
  {
    id: 36,
    nombre: "Kit dúo Safari Blush",
    precio: "27000",
    ingredientes: "Tiene una textura cremosa premium que se difumina muy fácil con brocha, esponja o con los dedos.",
    imagen: "/products/6.png",
    categoria: "Rostro"
  },
  {
    id: 37,
    nombre: "Kit X 4 Quesito Hightouille",
    precio: "22000",
    ingredientes: "Un cuarteto que eleva desde look más sencillo hasta el más sofisticado. ",
    imagen: "/products/4.png",
    categoria: "Rostro"
  },
  {
    id: 38,
    nombre: "Polvos Bakery Flour",
    precio: "22000",
    ingredientes: "Los polvos traslúcidos, perfecto para sellar tu maquillaje. No te aporta color ni covertura.",
    imagen: "/products/1.png",
    categoria: "Rostro"
  },
  {
    id: 39,
    nombre: "Iluminador Eclipse Lunar",
    precio: "16000",
    ingredientes: "Su acabado es satinado, no escarchado. Te da un brillo muy natural por sus pigmentos perlados.",
    imagen: "/products/95.png",
    categoria: "Rostro"
  },
  {
    id: 40,
    nombre: "Rubor lluminador Barra Retro Stick",
    precio: "22000",
    ingredientes: "Â¡Un dúo infaltable te espera! Un maquillaje básico se vuelve premium con tan solo un rubor y un toque de iluminador.",
    imagen: "/products/94.png",
    categoria: "Rostro"
  },
  {
    id: 41,
    nombre: "Rubor En Crema Star",
    precio: "16000",
    ingredientes: "Un rubor ideal para lograr un acabado fresco y radiante.",
    imagen: "/products/93.png",
    categoria: "Rostro"
  },
  {
    id: 42,
    nombre: "Rubor Eclipse Lunar",
    precio: "12000",
    ingredientes: "Este rubor solito o para sellar el rubor lÃ­quido es perfecto. Vienen 4 tonos diferentes. Te puede llegar cualquier tono, todos son preciosos.",
    imagen: "/products/92.png",
    categoria: "Rostro"
  },
  {
    id: 43,
    nombre: "Fijador Dreams 60 ml",
    precio: "16000",
    ingredientes: "Mantén tu maquillaje intacto y a prueba de todo con el Fijador Dreams.",
    imagen: "/products/89.png",
    categoria: "Piel"
  },
  {
    id: 44,
    nombre: "Sombra Cosmos",
    precio: "26000",
    ingredientes: "Â¡Nunca está de más un iluminador! El iluminador tiene un propósito en cada uno de los looks que quieres lograr y es elevar tu rostro. ",
    imagen: "/products/88.png",
    categoria: "Rostro"
  },
  {
    id: 45,
    nombre: "Sombra Sunset",
    precio: "27000",
    ingredientes: "Maquillarte debe ser tu terapia personal. Esta paleta contiene los tonos de acabado mate infaltables para todas. ",
    imagen: "/products/87.png",
    categoria: "Rostro"
  },
  {
    id: 46,
    nombre: "Jabón Facial Trendy Skincar",
    precio: "36000",
    ingredientes: "Su fórmula es muy suave y delicada con tu piel, por eso no sentiras que nace mucha espuma ya que no contiene sulfatos y no necesita hacer espuma para realizar bien su trabajo.",
    imagen: "/products/86.png",
    categoria: "Piel"
  },
  {
    id: 47,
    nombre: "Kit De Cejas Villanos ",
    precio: "15000",
    ingredientes: "Mantén tu maquillaje intacto y a prueba de todo con el Fijador Dreams.",
    imagen: "/products/100.png",
    categoria: "Rostro"
  },
  {
    id: 48,
    nombre: "Primer Menta Trendy",
    precio: "16000",
    ingredientes: "Deja un acabado luminoso perfecto para lucir una piel sana y radiante.          Deja actuar 2-3 minutos y ya puedes aplicar tu base de maquillaje.",
    imagen: "/products/44.png",
    categoria: "Piel"
  },
  {
    id: 49,
    nombre: "Polvos Sueltos Master Touch",
    precio: "26000",
    ingredientes: "Los polvos sueltos son un infaltable en la rutina de maquillaje ya que nos ayudan a sellar los productos cremosos para que su durabilidad sea más prolongada y evitar el exceso de sebo durante el dí.",
    imagen: "/products/49.png",
    categoria: "Rostro"
  },
  {
    id: 50,
    nombre: "Iluminador LÃ­quido Brilla Trendy ",
    precio: "10000",
    ingredientes: "Deslumbra tus maquillajes de la mano con estos iluminadores! Este iluminador le agrega un plus sutil a tus looks.",
    imagen: "/products/51.png",
    categoria: "Rostro"
  },
  {
    id: 51,
    nombre: "Corrector Profesional Magic Pequeño ",
    precio: "5000",
    ingredientes: "Es un corrector para unificar y corregir las manchitas de tu rostro.",
    imagen: "/products/48.png",
    categoria: "Rostro"
  },

  // piel
  {
    id: 52,
    nombre: "Polvo de Hadas",
    precio: "15000",
    ingredientes: "Puedes aplicarlo en el rostro, pecho, hombro, brazos, y si quieres que te dure mucho más puedes sellarlo con un poco de fijador o tónico de rosas ",
    imagen: "/products/14.png",
    categoria: "Piel"
  },
  {
    id: 53,
    nombre: "Papeleta Antigrasa",
    precio: "16000",
    ingredientes: "Quita la grasa sin afectar el maquillaje. ",
    imagen: "/products/8.png",
    categoria: "Piel"
  },

  {
    id: 54,
    nombre: "Espuma Desmaquillante",
    precio: "27000",
    ingredientes: "Limpia tu rostro de bacterias que se encuentra en los poros.  ",
    imagen: "/products/2.png",
    categoria: "Piel"
  },

  {
    id: 55,
    nombre: "Primer Rosas grande",
    precio: "17000",
    ingredientes: "Su fórmula es hidratante, suave y delicada con la piel, no obstruye los poros por lo que puede ser utilizado todos los días.",
    imagen: "/products/74.png",
    categoria: "Piel"
  },

  {
    id: 56,
    nombre: "Mascarilla Stickers Para Acné",
    precio: "17000",
    ingredientes: "Estos stickers serán la solución para esos molestos granitos y reducirlos rápidamente.",
    imagen: "/products/84.png",
    categoria: "Piel"
  },
  {
    id: 57,
    nombre: "Desmaquillante Bifásico",
    precio: "22000",
    ingredientes: "Desmaquillarnos ya no será la parte aburrida y demorada!. Con el desmaquillante bifásico solo deberás agitar y aplicar unas cuantas gotas para retirar tu maquillaje.",
    imagen: "/products/79.png",
    categoria: "Piel"
  },
  {
    id: 58,
    nombre: "Suero Detox Trendy",
    precio: "35000",
    ingredientes: "Suero ideal para pieles mixtas y grasas",
    imagen: "/products/83.png",
    categoria: "Piel"
  },
  {
    id: 59,
    nombre: "Kit Primer Y Fijador Rose",
    precio: "22000",
    ingredientes: "¡Lleva dos productos que transformarán visiblemente tu piel! Este dúo práctico y versátil es ideal para llevar en tu cosmetiquera",
    imagen: "/products/63.png",
    categoria: "Piel"
  },

  // Accesorios
  {
    id: 60,
    nombre: "Kit Mini Favoritos Galaxy",
    precio: "140000",
    ingredientes: "Descubre nuestro kit de mini favoritos en donde encontrarás tu maquillaje y skincare favorito. Vienen 16 productos + cosmetiquera",
    imagen: "/products/108.png",
    categoria: "Rostro"
  },
  {
    id: 69,
    nombre: "Encrespador de pestañas en color oro rosa.",
    precio: "16000",
    ingredientes: "Riza tus pestañas en dos o tres puntos, depende de la longitud de tus pestañas. ",
    imagen: "/products/19.png",
    categoria: "Accesorios"
  },
  {
    id: 61,
    nombre: "Bolsa Papel mediana Rosada",
    precio: "3500",
    ingredientes: "Empaca tus regalos de una manera única y hermosa. Bolsa de papel con un diseño hermoso de vaquera y sus accesorios.",
    imagen: "/products/75.png",
    categoria: "Accesorios"
  },
  {
    id: 62,
    nombre: "Esponja Corazón Kit X2",
    precio: "22000",
    ingredientes: "Con la Esponja Trendy Corazón conseguirás un acabado natural y profesional de todos los productos en crema, líquidos o en polvo. ",
    imagen: "/products/41.png",
    categoria: "Accesorios"
  },
  {
    id: 63,
    nombre: "Hair Clip Mariposa ",
    precio: "11000",
    ingredientes: "Perfecto para usar en recogidos altos, semi recogidos o como un toque decorativo en peinados sueltos. Un accesorio que mezcla estilo y funcionalidad.",
    imagen: "/products/45.png",
    categoria: "Accesorios"
  },
  {
    id: 64,
    nombre: "Pulsera Stich ",
    precio: "16000",
    ingredientes: "Su diseño plateado es perfecto para combinar con cualquier prenda y lucir fabulosa.",
    imagen: "/products/101.png",
    categoria: "Accesorios"
  },
  {
    id: 65,
    nombre: "Cartera Trendy",
    precio: "18000",
    ingredientes: "Viene en 7 tonos: Rosado, rosado animal print, negro, negro animal print, morado, beige y vino animal print.",
    imagen: "/products/82.png",
    categoria: "Accesorios"
  },
  {
    id: 66,
    nombre: "Esponja Panda",
    precio: "12000",
    ingredientes: "Consigue un acabado impecable con nuestra nueva esponja profesional ultra suave, una de las mejores calidades que hemos traído para ti, diseñada para difuminar tus productos líquidos, en crema o en polvo de forma uniforme",
    imagen: "/products/67.png",
    categoria: "Accesorios"
  },
  {
    id: 67,
    nombre: "Rubor En Barra Barbie Vaquera",
    precio: "16000",
    ingredientes: "un empaque premium que lo hace aún más especial, diseñados para resaltar tu belleza con un tono natural para todos los días.",
    imagen: "/products/69.png",
    categoria: "Rostro"
  },
  {
    id: 68,
    nombre: "Corrector De Ojeras Aura",
    precio: "22000",
    ingredientes: "El Corrector Aura es tu aliado ideal para lograr un maquillaje fresco y natural todos los días.",
    imagen: "/products/66.png",
    categoria: "Rostro"
  },
  {
    id: 70,
    nombre: "Pestañina Fortalecedora Fresh Trendy",
    precio: "16000",
    ingredientes: "Pestañina transparente que aporta fijación sin maltratar tus pestañas.",
    imagen: "/products/70.png",
    categoria: "Rostro"
  },
  {
    id: 71,
    nombre: "Pestañina Cat Trendy",
    precio: "16000",
    ingredientes: "Cepillo en goma: ideal para todo tipo de pestañas, de cualquier tamaño, cortas medianas o largas.",
    imagen: "/products/58.png",
    categoria: "Rostro"
  },
  {
    id: 72,
    nombre: "Pestañina Barbie Vaquera",
    precio: "16000",
    ingredientes: "Define, alarga y realza tu mirada al instante. Su cepillo de nylon en forma de espiral alcanza cada pestaña para separarlas y mantener el rizo por horas.",
    imagen: "/products/76.png",
    categoria: "Rostro"
  },
  {
    id: 73,
    nombre: "Kit Brochas Cejas Orgánicas X2 Und",
    precio: "12000",
    ingredientes: "Cejas on point siempre con nuestro cepillo doble para cejas. Peina y da forma a las cejas logrando un acabado definido y pulido.",
    imagen: "/products/104.png",
    categoria: "Accesorios"
  },
  {
    id: 74,
    nombre: "Brocha Trendy Doble Cejas Cepillo",
    precio: "10000",
    ingredientes: "Brocha dual para cejas con cepillo. Es una brocha dual de línea económica, con excelente calidad y de pelo sintético.",
    imagen: "/products/106.png",
    categoria: "Accesorios"
  },
  {
    id: 75,
    nombre: "Primer Masmelo Trendy",
    precio: "26000",
    ingredientes: "Primer con efecto Masmelo, una textura diferente a los primers en gel tradicionales.",
    imagen: "/products/105.png",
    categoria: "Rostro"
  },
  {
    id: 76,
    nombre: "Cosmetiquera Cuerina Trendy",
    precio: "36000",
    ingredientes: "Perfecta para llevar de viaje o en el bolso diario. Viene con dos compartimientos: Uno para almacenar brochas y el segundo es más amplio",
    imagen: "/products/107.png",
    categoria: "Accesorios"
  },
  
]

const Categorias = ["Labiales", "Accesorios", "Delineadores", "Rostro", "Piel"]


function productos() {

  const numeroWhatsApp = "573225893262";

  const mensajeRamoPersonalizado = (ramo) => {
    const texto = `Hola! Quisiera un ramo personalizado.
${ramo ? `Me interesa algo similar a: ${ramo.nombre} ($${ramo.precio}).` : ""}
Â¿Me ayudas a armar uno con mi presupuesto y colores?`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const { agregarUNidadAlCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const [categoriaSeleccionada, SetCategoriaSeleccionada] = useState("Labiales");
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

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

  // ðŸ‘‡ AQUÃ VA EL BLOQUEO DEL SCROLL
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


  const ProductosPorCategoria = categoriaSeleccionada === "Todas"
    ? ProductosUno
    : ProductosUno.filter((prod) => prod.categoria === categoriaSeleccionada);

  const ProductosFiltrados = terminoBusqueda
    ? ProductosPorCategoria.filter((prod) => {
      const texto = `${prod.nombre} ${prod.ingredientes}`.toLowerCase();
      return texto.includes(terminoBusqueda.toLowerCase());
    })
    : ProductosPorCategoria;

  const handleBuscar = () => {
    setTerminoBusqueda(textoBusqueda.trim());
  };

  const handleLimpiarBusqueda = () => {
    setTextoBusqueda("");
    setTerminoBusqueda("");
  };

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
                  <img src={item.imagen} alt="ramo" style={{ width: "130px", maxHeight: "150px" }} />
                </div>
                <div className="seccion-info-producto">
                  <h3 style={{ fontSize: "0.8em", marginBottom: "0.3em", marginTop: "0.2em" }}>{item.nombre}</h3>
                  <small style={{ fontSize: "0.7em", marginBottom: "0.5em" }}>{item.descripcion}</small>
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
      <p className="titutlocategorís">Categorís</p> */}

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

      {/* código para generar las categorís dinámicamente
        a partir del array:"ListaProductos" */}

      <div className="buscador-productos">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleBuscar();
          }}
          className="input-buscador-productos"
          aria-label="Buscar productos"
        />
        <button
          type="button"
          className="btn-buscar-productos"
          onClick={handleBuscar}
        >
          Buscar
        </button>
        {terminoBusqueda && (
          <button
            type="button"
            className="btn-limpiar-busqueda"
            onClick={handleLimpiarBusqueda}
          >
            Limpiar
          </button>
        )}
      </div>

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
        dependiendo de la categorí que el usuario elija */}

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
        {ProductosFiltrados.length === 0 && (
          <p className="sin-resultados">
            No encontramos productos para: {terminoBusqueda}.
          </p>
        )}

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
          <strong >¡ Arma el regalo perfecto!</strong> <br></br>Envíanos un mensaje para armar uno a tu estilo y necesidad <br></br> <br></br> <strong>Conoce algunas de nuestras creaciones:</strong>
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
                  {/* âœ… Botón para abrir el modal */}
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
                  <small style={{ fontWeight: "700", textAlign: "cen", fontSize: "0.7em", paddingRight: "20px", marginBottom: "0.6em" }}> {item.precio}</small>
                  {/* <button onClick={() => handleAgregar(item)} className="boton-comprar-destacado" style={{ fontSize: "0.8em", marginBottom: "0.5em", width: "70%", marginLeft: "15%" }}>Agregar  <FaCartShopping /> </button> */}
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
          color:"white"
        }}
      >
        <FaComments style={{ marginRight: "0.5em", color:"white" }} /> !Quiero un ramo personalizado¡
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

      <div style={{ padding: "1px", width: "100%", backgroundColor: "#8c68a73b", marginTop: "2.5em" }} />
    </section >
  );
}

export default productos;


