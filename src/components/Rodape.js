function Icones(props) { 
    return(
        <div>
            <ion-icon name={props.nome}></ion-icon>
        </div>
    );
}

export default function Rodape() { 
    return (
        <div class="menuMobile"> 
            <Icones nome="home" /> 
            <Icones nome="search-outline" /> 
            <Icones nome="add-circle-outline" />
            <Icones nome="heart-outline" />  
            <Icones nome="person-outline" />
        </div>
    );
}