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

export default function SideBar() {  
    const dados =  [ 
        {
            url: "https://s2.glbimg.com/2B5gNai0T7YtH2QCW6DAar1jeCc=/620x466/top/e.glbimg.com/og/ed/f/original/2021/05/01/lionel-messi.jpg", 
            nome: "messi", 
            state: "Segue você",
            opcao: "Seguir"
        }, 
        {
            url:"https://yt3.ggpht.com/qB-nQZG1GLBnnMRmaFBMc_BRM96i9RaDyoxvxs6WRuQE6UHWO1IsqqDTgHivNFv2-Qmp_NCP5A=s900-c-k-c0x00ffffff-no-rj",   
            nome: "ronaldinho", 
            state: "Segue você",
            opcao: "Seguir"
        }, 
        {
            url: "https://www.rbsdirect.com.br/imagesrc/24554771.jpg?w=700", 
            nome: "cristiano", 
            state: "Segue você",
            opcao: "Seguir"
        }, 
        {
            url:"https://www.realmadrid.com/img/cc_1920px/_he13234_20211212092040.jpg",
            nome: "vinijr", 
            state: "Segue você",
            opcao: "Seguir"  
        }, 
        {
            url:"https://yt3.ggpht.com/oZCGpPQc5qat2YIzVs_h1LTvrtpV6G--Q2CopkOoAa7d1WvHDohPzWO-vSEnQ4GljcQOO_6QkQ=s900-c-k-c0x00ffffff-no-rj",
            nome: "driven.edu", 
            state: "Segue você",
            opcao: "Seguindo"  
        }
    ]; 

    return( 
        <div class="barra-sugestoes"> 
            <div class="sugestoes1">
                <h4>Sugestões para você</h4> 
                <h5>Ver tudo</h5> 
            </div> 
            
            {dados.map((post) => ( 
            <BarraLateral 
                image= {post.url}
                nomePerfil = {post.nome}
                status= {post.state}  
                opcoes= {post.opcao}
            /> 
            ))}
            <div class="privacidade">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div> 
            <div class="ig-do-face">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div> 
    );
}