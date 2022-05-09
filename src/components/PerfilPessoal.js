function DadosPerfil(props) { 
    return(
        <div class="perfil-pessoal">
            <img src={props.image}/>
            <div class="descricao-perfil-pessoal">
                <h3>{props.nickname}</h3> 
                <h4>{props.nome}</h4> 
            </div> 
        </div>
    );
}


export default function PerfilPessoal() { 
    return(
        <DadosPerfil
            image = "imagens/ig1.jpeg"
            nickname ="lucas_martins.o" 
            nome= "Lucas" 
        />
    );
}