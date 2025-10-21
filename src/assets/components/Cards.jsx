import Card from "./Card";
import imgBurguer from "./../pratos/burguer-picanha.jpeg";

const Cards = () => {
    return (
        <div className="cards">
            <Card
                titulo="buguer de Picanha"
                descricao="Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geleia de Bacon"
                preco="R$ 44,90"
                imagem={ imgBurguer }/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
     )
} 

export default Cards