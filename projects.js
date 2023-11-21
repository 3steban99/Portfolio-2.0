const projects = [
    {
        "id": 1,
        "title": "Beat Club",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/beatclub.png",
        "github": "https://github.com/AndyCavedal/beat-club"
    },
    {
        "id": 2,
        "title": "Tu Club",
        "description": "prueba de description lajksdlakshdlajskhdkajhsdklsdhjbafkndbv jkhfdksaljdf",
        "image": "./src/assets/tuclub.png",
        "github": "https://github.com/3steban99/TuClub"
    }
]

export const getProjects = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(projects)
        },500)
    })
}