
const projects = [
    {
        "id": 1,
        "title": "Beat Club",
        "description": "Proyecto Real Beat Club Mendoza, es un proyecto desde 0 realizado con un compañero creado con React en el FrontEnd y MySQL con Express para el BackEnd. El proyecto tenia como objetivo mejorar la pagina de beat club que tenian en la cual estaba mal hecha, por lo que decidimos realizarla desde 0 con React. La pagina es usada principalmente como menu para los clientes a traves de un QR y para que el dueño tambien pueda modificar el menu. Tambien cuenta con eventos.",
        "image": "https://i.ibb.co/Bc4r0Fz/beatclub.webp",
        "github": "https://github.com/AndyCavedal/beat-club",
        "web" : "https://beatclub.com.ar/"
    },
    {
        "id": 2,
        "title": "Tu Club",
        "description": "Proyecto de CODERHOUSE del curso de React. En la cual es un proyecto de ecommerce de una tienda mayorista. Elegi crear un proyecto de una tienda de indumentaria deportiva (mayorista). Se creo en visual Studio code, con React, los estilos fueron con css y Bootstrap 5 y su base de datos en Firebase. ",
        "image": "https://i.ibb.co/sVpZ0NX/tuclub.webp",
        "github": "https://github.com/3steban99/TuClub",
        "web": "https://tu-club.vercel.app/"
    },
    {
        "id": 3,
        "title": "AM INDUMENTARIA",
        "description": "Este fue un Proyecto Real asignado por CODERHOUSE, ya que lo reclame por esta en el top 10 del curso de React js. Fue un proyecto grupal con diseñadores y programadores, en la cual tuvimos un mes para terminarlo. Aqui aprendi mucho el trabajo en equipo y en las asignaciones de tarea, como tambien aprendi mas GitHub, ya que como era trabajo grupal se crearon varias ramas para cada uno y despues se hizo un merge con todo. El proyecto solo esta creado con React Vite.",
        "image": "https://i.ibb.co/zs11xxk/Am-indumentaria.webp",
        "github": "https://github.com/AM-Indumentaria",
        "web": "https://am-foreverchic.vercel.app/"
    },
    {
        "id": 4,
        "title": "Portafolio",
        "description": "Este es mi Proyecto de mi Portafolio, esta actualizado ya que antes solo estaba hecho con HTML y CSS. Ahora esta actualizado con React Vite y Bootstrap, en la cual tambien cambie un poco el diseño y agrega mas informacion y detalles a mi portafolio.",
        "image": "https://i.ibb.co/9nRpXBS/portfolio.webp",
        "github": "https://github.com/3steban99/Portfolio-2.0",
        "web": "https://estebanbarrionuevo.vercel.app/"
    },
    {
        "id": 5,
        "title": "Rolling Glass",
        "description": "Este es un proyecto de Rolling Code del primer modulo, que fue HTML y CSS. Este proyecto al ser simple con codigo, lo pongo principalmente porque fue la primera vez que uso como simulacion la metodologia SCRUM con mi grupo, en la cual yo fui asignado como el SCRUM MASTER. Como SCRUM MASTER tuve que asignarle las tareas a mi grupo y dirigir como sera el proyecto, tambien tuve que corregir y enseñar a la gente nueva",
        "image": "https://i.ibb.co/8XnBQNn/rollingglass.webp",
        "github": "https://github.com/3steban99/Rolling-Glass",
        "web":"https://rolling-glass-123ccc.netlify.app/"
    },
    {
        "id": 6,
        "title": "Calculadora",
        "description": "Esta es una calculadora creada en react a modo de practica, para poder mejorar mi logica y uso del lenguaje. Es una calculadora simple para realizar operaciones matematicas basicas: sumar, restar, multiplicar y dividir.",
        "image": "https://i.ibb.co/RzxfHft/calculadora.webp",
        "github": "https://github.com/3steban99/Calculadora-practica",
        "web":"https://calculadora-basica-esteban.vercel.app/"
    },
    {
        "id": 7,
        "title": "Proyecto de un Parcial",
        "description": "Este es un proyecto de un final parcial de Programacion 2 de la UTN (Universidad Tecnologica Nacional) que es un proyecto fullstack, en la cual la parte frontend fue en react.js (fue grupal como parte del parcial) y la parte backend (que fue el final) que habia que conectar el proyecto de react con la base de datos en sql. La parte frontend fue grupal, por lo que mi parte del proyecto fue la creacion del crud de: la parte de productos y forma de pago con sus respectivas funciones: creacion, eliminacion y modificacion. La parte backend fue individual por lo que tuve que crear la api rest con sus respectivas llamadas: GET, DELETE, PUT, PUSH del crud del proyecto para que funcione con una base de datos en MySQL con XAMPP.",
        "image": "https://i.ibb.co/GQf35Fz/maxikiosco.webp",
        "github": "https://github.com/3steban99/PARCIAL-FINAL",
        "web": ""
    },
]

export const getProjects = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(projects)
        },500)
    })
}