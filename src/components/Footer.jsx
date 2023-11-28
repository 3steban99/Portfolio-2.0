import { faCircleUp } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Footer = ()=>{
    return(
        <div className="bg-footer d-flex justify-content-center">
            <div className="text-center container-footer">
                <p className="fs-5">Gracias por observar</p>
                <p className="fs-5">Creado por Esteban Barrionuevo | 2023 Copyright &copy; All Rights Reserved</p>
                <FontAwesomeIcon icon={faCircleUp} className="icon-footer"/>
            </div>
        </div>
    )
}