import{DiHtml5, DiCss3, DiJsBadge, DiMysql, DiReact} from "react-icons/di"
import '../../styles/components/projector.sass'


const tech = [
    {id: "buscaCEP", name:"Buscador de CEP", img: require("../../img/buscaCEP.png"), icon:[<DiHtml5/>, <DiCss3/>, <DiJsBadge/>, <DiReact/>], link: "https://transcendent-halva-d95d57.netlify.app/"},
    {id: "advice", name:"Conselho Randômico", img: require("../../img/advice.png"), icon:[<DiHtml5/>, <DiCss3/>, <DiJsBadge/>, <DiReact/>], link: "https://lambent-clafoutis-3a9aa8.netlify.app/"}
]

function projector(){
    return(
        <div id="projector-grid">
        {tech.map((e)=>(
            <div className="projector-card" id={e.id} key={e.id}>
                <h2>{e.name}</h2>
                <a href = {e.link}><img src={e.img} className="projector-img"></img></a>
                <h3>Ferramentas</h3>
                <div className="projector-icon">{e.icon}</div>
                {e.id === "buscaCEP" ? (
                    <div className="projector-desc">
                    <h3>Descrição</h3>
                    <p>Criado em HTML, CSS, JavaScript e React</p>
                    <p>O buscador de CEP realiza uma busca por um CEP digitado pelo usuário através de uma API, após o retorno da busca, é mostrado o endereço do CEP fornecido.</p>
                    <p>API: viaCEP</p>
                    </div>
                ): e.id === "advice" ? (
                    <div className="projector-desc">
                    <h3>Descrição</h3>
                    <p>Criado em HTML, CSS, JavaScript e React</p>
                    <p>O gerador de Conselho Randômico é um projeto feito para melhorar meu conceito em API</p>
                    <p>Nesse projeto é utilizado uma API que busca conselhos randomicos e traz para o usuário</p>
                    <p>API: adviceslip</p>
                    </div>
                ): e.id}
            </div>
        ))}
        </div>
    )
}

export default projector