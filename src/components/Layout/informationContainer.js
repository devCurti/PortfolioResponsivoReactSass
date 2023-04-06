import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../../styles/components/informationContainer.sass'

function informationContainer(){
    return(
        <section id="information">
            <div className="info-card">
            <AiFillPhone id="phone-icon" className="hidden"/>
            <div>
                <h3>Telefone</h3>
                <p>(43)99812-3856</p>
            </div>
            </div>
            <div className="info-card">
            <AiOutlineMail id="email-icon" className="hidden"/>
            <div>
                <h3>E-mail</h3>
                <p>joaocurti2002@gmail.com</p>
            </div>
            </div>
            <div className="info-card">
            <AiFillEnvironment id="pin-icon" className="hidden"/>
            <div>
                <h3>Localização</h3>
                <p>Londrina/PR</p>
            </div>
            </div>
        </section>
    )
}

export default informationContainer