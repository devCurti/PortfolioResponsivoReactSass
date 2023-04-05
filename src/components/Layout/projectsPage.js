import '../../styles/components/projectsPage.sass'
import Projector from './projector'
import {AiFillHome} from 'react-icons/ai'

function projectsPage(){
    return(
        <div id='projects'>
            <a href="/"><AiFillHome/></a><br/>
            <h1 id='title'>Projetos</h1>
            <div className='project-container'>
                <Projector/>
            </div>
            <a href="/"><AiFillHome/></a><br/>
        </div>
    )
}

export default projectsPage