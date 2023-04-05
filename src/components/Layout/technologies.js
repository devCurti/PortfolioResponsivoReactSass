import{DiHtml5, DiCss3, DiJsBadge, DiMysql, DiReact} from "react-icons/di"
import '../../styles/components/technologies.sass'

const tech = [
    {id: "html", name: "HTML5", icon: <DiHtml5/> },
    {id: "css", name: "CSS3", icon: <DiCss3/> },
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>},
    {id: "mysql", name: "MySQL", icon: <DiMysql/>},
    {id: "react", name: "React", icon: <DiReact/>},
]


function technologies(){
    return(
        <section id="tech-container">
            <h2>Tecnologias</h2>
            <div className="tech-grid">
                {tech.map((e)=>(
                    <div className="tech-card" id={e.id} key={e.id}>
                        {e.icon}
                        <div className="tech-info">
                            <h3>{e.name}</h3>
                            {e.id === "html" ? (
                                <p>HTML5 é uma linguagem de marcação para a World Wide Web</p>
                            ): e.id === "css" ? (
                                <p>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web</p>
                            ): e.id === "js" ? (
                                <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma</p>
                            ): e.id === "mysql" ? (
                                <p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface</p>
                            ): e.id === "react" ? (
                                <p>React é uma biblioteca JavaScript front-end gratuita e de código aberto para criar interfaces de usuário baseadas em componentes</p>
                            ): e.id}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default technologies