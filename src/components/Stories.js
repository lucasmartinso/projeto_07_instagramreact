function Storie(props) { 
    return(
        <li>
            <div>
                <img src={props.image}/> 
            </div> 
            <h3>{props.name}</h3> 
        </li> 
    );
}

export default function Stories() {  
    const dados =  [ 
        {
            url: "https://www.lance.com.br/files/article_main/uploads/2022/04/29/626bfff3c32d3.jpeg", 
            nome: "gabigol", 
        }, 
        {
            url:"https://conteudo.imguol.com.br/c/esporte/46/2022/04/12/12042022-karim-benzema-real-madrid-comemora-apos-marcar-seu-segundo-gol-no-jogo-contra-o-chelsea-pelas-quartas-de-final-da-liga-dos-campeoes-1649803862317_v2_900x506.jpg",   
            nome: "benzema", 
        }, 
        {
            url: "https://vejario.abril.com.br/wp-content/uploads/2021/10/Coldplay.jpg", 
            nome: "coldplay", 
        }, 
        {
            url:"https://s2.glbimg.com/AdiA086hFpkOkYfG2yPkHvLLjic=/0x0:1080x720/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/L/9/XfUN6AQAyVkiZvpBsgmQ/ed-sheeran.jpg",
            nome: "edsheran",   
        }, 
        {
            url:"https://d2yoo3qu6vrk5d.cloudfront.net/images/20211030114852/pele-elogio-a-diego-maradona_-que-dijo-del-argentino-por-mensaje-de-cumpleancc83os-900x485.webp",
            nome: "pele",  
        }, 
        {
            url: "data:image/jpeg;base64,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", 
            nome: "flamengo", 
        }, 
        {
            url:"https://seeklogo.com/images/A/adidas-logo-82FD2D7779-seeklogo.com.png",   
            nome: "adidas", 
        }, 
        {
            url: "https://i.pinimg.com/originals/b8/bd/49/b8bd496e37f680032a20924260aaa5be.jpg", 
            nome: "nikesb", 
        }
    ];  

    return( 
        <div class="stories">
            <ul> 
            {dados.map((post) => ( 
                <Storie  
                    image = {post.url} 
                    name = {post.nome}
                />
            ))}
              </ul>
        <div class="setinha"><ion-icon name="chevron-forward-circle-outline"></ion-icon></div>
            
    </div>  
    );
}