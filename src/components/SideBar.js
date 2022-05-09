function BarraLateral(props) { 
    return(
        <div class="sugestoes"> 
            <img src={props.image}/>
            <div class="descricao-perfil">
                <h4>{props.nomePerfil}</h4> 
                <h5>{props.status}</h5> 
            </div> 
            <h3>{props.opcoes}</h3>
        </div> 
    );
} 

const dados=  [
    "https://s2.glbimg.com/2B5gNai0T7YtH2QCW6DAar1jeCc=/620x466/top/e.glbimg.com/og/ed/f/original/2021/05/01/lionel-messi.jpg",
    "https://yt3.ggpht.com/qB-nQZG1GLBnnMRmaFBMc_BRM96i9RaDyoxvxs6WRuQE6UHWO1IsqqDTgHivNFv2-Qmp_NCP5A=s900-c-k-c0x00ffffff-no-rj", 
    "https://www.rbsdirect.com.br/imagesrc/24554771.jpg?w=700",  
    "https://www.realmadrid.com/img/cc_1920px/_he13234_20211212092040.jpg",
    "https://yt3.ggpht.com/oZCGpPQc5qat2YIzVs_h1LTvrtpV6G--Q2CopkOoAa7d1WvHDohPzWO-vSEnQ4GljcQOO_6QkQ=s900-c-k-c0x00ffffff-no-rj" 
]; 


export default function SideBar() { 
    return( 
        <div class="barra-sugestoes"> 
            <div class="sugestoes1">
                <h4>Sugestões para você</h4> 
                <h5>Ver tudo</h5> 
            </div> 
            
            {dados.map((dados) => (
            <BarraLateral 
                image= {dados}
                nomePerfil = "messi"
                status= "Segue você"  
                opcoes= "Seguir"
            /> 
            ))}

            <BarraLateral 
                image ="https://yt3.ggpht.com/qB-nQZG1GLBnnMRmaFBMc_BRM96i9RaDyoxvxs6WRuQE6UHWO1IsqqDTgHivNFv2-Qmp_NCP5A=s900-c-k-c0x00ffffff-no-rj"
                nomePerfil ="ronaldinho" 
                status= "Segue você"
                opcoes= "Seguir"
            /> 

            <BarraLateral 
                image= "https://www.rbsdirect.com.br/imagesrc/24554771.jpg?w=700"
                nomePerfil= "cristiano" 
                status = "Segue você"  
                opcoes = "Seguir"
            /> 

            <BarraLateral 
                image = "https://www.realmadrid.com/img/cc_1920px/_he13234_20211212092040.jpg"
                nomePerfil = "vinijr"
                status ="Segue você"
                opcoes= "Seguir"
            /> 

            <BarraLateral 
                image="https://yt3.ggpht.com/oZCGpPQc5qat2YIzVs_h1LTvrtpV6G--Q2CopkOoAa7d1WvHDohPzWO-vSEnQ4GljcQOO_6QkQ=s900-c-k-c0x00ffffff-no-rj"
                nomePerfil = "driven.edu" 
                status="Segue você" 
                opcoes= "Seguindo"
            /> 
            <div class="privacidade">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div> 
            <div class="ig-do-face">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div> 
    );
}