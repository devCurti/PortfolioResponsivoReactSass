import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../../styles/components/socialNetworks.sass'

const socialNetworks =[
    { name: "linkedin", icon: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/jvacurti'},
    { name: "github", icon: <FaGithub/>, link: 'https://www.github.com/devCurti' },
]

function SocialNetworks(){
    return(
        <section id="social-network">
            {socialNetworks.map((e) => (
                <a href={e.link} className='social-btn' id={e.name} key={e.name}>
                    {e.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks