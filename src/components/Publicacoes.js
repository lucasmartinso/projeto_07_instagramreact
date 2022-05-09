import React from "react";

function Post(props) {   
    
    const [classButton, setClassButon]= React.useState(); 

    function curtir() { 
        setClassButon(".rodape-cima > .curtidas-comentarios > ion-icon.vermelho");
    }  

    return(
        <div class="publicacao1">
            <div class="cabecalho">
                <div class="bolinha-do-perfil"><img src={props.fotoPerfil}/></div> 
                <h5>{props.nickname}</h5> 
                <ion-icon name="ellipsis-horizontal"></ion-icon> 
            </div> 
            <div class="iran"><img src={props.publicacao}/></div> 
            <div class="rodape"> 
            <div class="rodape-cima">
                <div class="curtidas-comentarios">
                    <ion-icon name="heart-outline" onClick= {curtir}></ion-icon> 
                    <ion-icon name="chatbubble-outline"></ion-icon> 
                    <ion-icon name="paper-plane-outline"></ion-icon>   
                </div>  
                <div class="salvar"><ion-icon name="bookmark-outline"></ion-icon></div>
            </div> 
            <div class="rodape-meio">
                <img src={props.imageCurtida}/> 
                <h4>Curtido por <strong>{props.curtidaPor}</strong> e <strong>{props.numCurtidas}</strong></h4> 
            </div> 
            <div class="rodape-baixo">
                <h3>{props.numComentarios}</h3> 
                <h4><strong>{props.comentarioPerfil1}</strong> {props.comentario1}</h4> 
                <h4><strong>{props.comentarioPerfil2}</strong> {props.comentario2}</h4> 
                <h5>{props.tempoPublicado}</h5>
            </div> 
            <div class="rodape-adicional"> 
                <ion-icon name="happy-outline"></ion-icon> 
                <input type="text" placeholder="Adicione um comentário..." />
                <h6>Publicar</h6>
            </div>
            </div>
        </div>   
    );
} 

export default function Publicacoes() {   

    const dados =  [ 
        {
            urlPerfil: "https://i1.wp.com/surgiu.com.br/wp-content/uploads/2022/03/iran-luva-de-pedreiro-1.jpg?fit=400%2C400&ssl=1", 
            nome: "luvapedreiro", 
            urlPost: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3208225:1648073838/lyva.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=781f2c0",
            urlCurtidas: "data:image/png;base64,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",
            perfilCurtidas: "respondeai", 
            numeroLikes: "1.101.523 pessoas", 
            numComents: "Ver todos os 16.752 comentários" , 
            comentPerfil1: "neymarjr", 
            coment1: "recebaaa" , 
            comentPerfil2: "phil.coutinho", 
            coment2: "o melhor de todos" ,
            timePublished: "HÁ 2 HORAS"
        }, 
        {
            urlPerfil: "https://f.i.uol.com.br/fotografia/2022/01/14/164220249561e2057ff08a9_1642202495_3x2_md.jpg", 
            nome: "casimiro", 
            urlPost: "https://www.opovo.com.br/_midias/jpg/2021/11/11/310x175/1_conheca_casimiro_jornalista_esportivo_apresentador_streamer_torcedor_ilustre_do_vasco-17469300.jpg",
            urlCurtidas: "https://yt3.ggpht.com/ytc/AKedOLQdVvX3gGYJL6PhK8dzixVSaOn_uRKTLV_8MgmomA=s176-c-k-c0x00ffffff-no-rj-mo",
            perfilCurtidas: "southamericanmemes", 
            numeroLikes: "701.294 pessoas", 
            numComents: "Ver todos os 4.867 comentários" , 
            comentPerfil1: "pedrocertezas", 
            coment1: "maluco hahahaha" , 
            comentPerfil2: "tntsportsbr", 
            coment2: "figura KKKKKKK" ,
            timePublished: "HÁ 1 DIA"
        }, 
        {
            urlPerfil: "https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg", 
            nome: "neymarjr", 
            urlPost: "https://static.itatiaia.com.br/admin/Conteudo/noticias/195273/original/neymar24-03-2022_22-.jpg",
            urlCurtidas: "https://story.storiesdb.ch/224066959/profile_pic.jpg",
            perfilCurtidas: "gabigol", 
            numeroLikes: "3.209.468 pessoas", 
            numComents: "Ver todos os 223 comentários" , 
            comentPerfil1: "gabigol", 
            coment1: "craque, craque e craque" , 
            comentPerfil2: "vinijr", 
            coment2: "tem que pagar aposta em kkkkk" ,
            timePublished: "HÁ 21 HORAS"
        }  
    ]; 

    return(  
        <div> 

            {dados.map((post) => (
            <Post
                fotoPerfil= {post.urlPerfil} 
                nickname = {post.nome}  
                publicacao = {post.urlPost}
                imageCurtida ={post.urlCurtidas}
                curtidaPor= {post.perfilCurtidas}
                numCurtidas= {post.numeroLikes} 
                numComentarios = {post.numComents} 
                comentarioPerfil1 = {post.comentPerfil1}
                comentario1= {post.coment1}
                comentarioPerfil2 = {post.comentPerfil2}
                comentario2=  {post.coment2} 
                tempoPublicado = {post.timePublished}
            />  
            ))} 
        </div>
    );
}