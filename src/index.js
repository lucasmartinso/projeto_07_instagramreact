import ReactDOM from 'react-dom';    

import Topo from './components/Topo'; 
import Stories from './components/Stories'; 
import Publicacoes from './components/Publicacoes'; 
import SideBar from './components/SideBar'; 
import PerfilPessoal from './components/PerfilPessoal'; 
import Rodape from './components/Rodape'; 

function App() {  
    return( 
        <div> 
            <Topo />  
            <div class="principal">
                <div class="feed"> 
                    <Stories />  
                    <Publicacoes /> 
                </div>  
                <div class="sidebar">  
                    <PerfilPessoal />
                    <SideBar /> 
                </div>
            </div>  
            <Rodape />
        </div>
    )
}

ReactDOM.render(<App />,document.querySelector(".root"));