function Icones(props) { 
    return(
        <div>
            <ion-icon name={props.nome}></ion-icon>
        </div>
    );
}

export default function Topo() { 
    return(
        <div class="menu"> 

            <div class="icone-instagram">
                <Icones 
                    nome="logo-instagram" 
                    /> 
                <div class="borda-vertical"></div>
                <img src="imagens/logo 1.png"/> 
            </div>
            <div class="pesquisa"><h5>Pesquisar</h5></div>   
            <div class="icones-perfil">
                <Icones 
                    nome="paper-plane-outline" 
                    />
                <Icones 
                    nome="compass-outline" 
                    />
                <Icones 
                    nome="heart-outline"
                     />  
                <Icones 
                    nome="person-outline" 
                    />    
            </div>
            <div class="mobile-aviao">
                <Icones 
                nome="paper-plane-outline" 
                />
            </div>
        </div>    
    );
}