import '../../styles/components/mainContect.sass'
import About from '../../components/Layout/aboutContainer'
import Technologies from './technologies'
import Project from './project'

function mainContent(){
    return(
        <div id='main'>
            <About/>
            <Technologies/>
            <Project/>
        </div>
    )
}

export default mainContent