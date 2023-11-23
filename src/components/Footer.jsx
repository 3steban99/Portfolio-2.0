import { faCircleUp } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Footer = ()=>{
    return(
        <div className="bg-light d-flex justify-content-center">
            <div className="text-center">
                <p>Gracias por observar</p>
                <p>Creado por Esteban Barrionuevo | </p>
                <FontAwesomeIcon icon={faCircleUp} />
            </div>
        </div>
    )
}