const projects = [
    {
        "id": 1,
        "title": "Beat Club",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/beatclub.webp",
        "github": "https://github.com/AndyCavedal/beat-club"
    },
    {
        "id": 2,
        "title": "Tu Club",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/tuclub.webp",
        "github": "https://github.com/3steban99/TuClub"
    },
    {
        "id": 3,
        "title": "AM INDUMENTARIA",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/tuclub.webp",
        "github": ""
    },
    {
        "id": 4,
        "title": "Portafolio",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/tuclub.webp",
        "github": ""
    },
    {
        "id": 5,
        "title": "Calculadora",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/projects/calculadora.webp",
        "github": ""
    },
    {
        "id": 6,
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