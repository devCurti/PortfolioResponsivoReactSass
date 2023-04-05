import '../../styles/components/sideBar.sass'
import myImg from '../../img/myImg.jpeg'
import Social from '../../components/Layout/socialNetworks'
import Info from '../../components/Layout/informationContainer'
import Curriculo from '../../other/curriculo.pdf'



function sideBar(){
    return(
        <aside id='sidebar'>
            <img src={myImg} alt='Minha imagem'/>
            <p className='title'>Estudante de ADS</p>
            <Social/>
            <Info/>
            <a href={Curriculo} download='Currículo-João-Curti' className='btn'>
                Download currículo
            </a>
        </aside>
    )
}

export default sideBar