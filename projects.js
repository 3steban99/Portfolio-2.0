const projects = [
    {
        "id": 1,
        "title": "Beat Club",
        "description": "Proyecto Real Beat Club Mendoza, es un proyecto desde 0 realizado con un compañero creado con React en el FrontEnd y MySQL con Express para el BackEnd. El proyecto tenia como objetivo mejorar la pagina de beat club que tenian en la cual estaba mal hecha, por lo que decidimos realizarla desde 0 con React. La pagina es usada principalmente como menu para los clientes a traves de un QR y para que el dueño tambien pueda modificar el menu. Tambien cuenta con eventos.",
        "image": "./src/assets/projects/beatclub.webp",
        "github": "https://github.com/AndyCavedal/beat-club",
        "web" : "https://beatclub.com.ar/"
    },
    {
        "id": 2,
        "title": "Tu Club",
        "description": "Proyecto de CODERHOUSE del curso de React. En la cual es un proyecto de ecommerce de una tienda mayorista. Elegi crear un proyecto de una tienda de indumentaria deportiva (mayorista). Se creo en visual Studio code, con React, los estilos fueron con css y Bootstrap 5 y su base de datos en Firebase. ",
        "image": "./src/assets/projects/tuclub.webp",
        "github": "https://github.com/3steban99/TuClub",
        "web": "https://tu-club.vercel.app/"
    },
    {
        "id": 3,
        "title": "AM INDUMENTARIA",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/Am-indumentaria.webp",
        "github": "https://github.com/AM-Indumentaria",
        "web": "https://am-foreverchic.vercel.app/"
    },
    {
        "id": 4,
        "title": "Portafolio",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/tuclub.webp",
        "github": "",
        "web": ""
    },
    {
        "id": 5,
        "title": "Rolling Glass",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/rollingglass.webp",
        "github": "",
        "web":""
    },
    {
        "id": 6,
        "title": "Calculadora",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/calculadora.webp",
        "github": ""
    },
    {
        "id": 7,
        "title": "Proyecto de un Parcial",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/maxikiosco.webp",
        "github": ""
    },
]

export const getProjects = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(projects)
        },500)
    })
}