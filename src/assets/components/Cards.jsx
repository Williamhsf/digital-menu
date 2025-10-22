import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "./../cardapio"
import imgBurguer from "./../pratos/burguer-picanha.jpeg";
import enroladinho from "./../pratos/enroladinho-mignon.jpeg";

const Cards = () => {
    const itensCategoria = [pratosPrincipais, sobremesas, bebidas]

    console.log(itensCategoria[0])

    return (
        <div className="cards">
            <Card
                titulo="buguer de Picanha"
                descricao="Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geleia de Bacon"
                preco="R$ 44,90"
                imagem={ imgBurguer }/>
            
            <Card
                titulo="Enroladinho de Mignon"
                descricao="Finíssimas fatias de filé mignon enroladas no parmesão"
                preco="R$ 64,90"
                imagem={ enroladinho }/>
            <Card/>
            <Card/>
            <Card/>
        </div>
     )
} 

export default Cards