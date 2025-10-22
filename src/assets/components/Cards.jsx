import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "./../cardapio"

const Cards = ({ numCategoriaSelecionada }) => {
    const itensCategoria = [pratosPrincipais, sobremesas, bebidas]
    const categoriaSelecionada = itensCategoria[ numCategoriaSelecionada ]

    return (
        <div className="cards">
            {categoriaSelecionada.map((item) =>(
                <Card
                    titulo={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}
                    imagem={ item.imagem }
                />
            ))}
        </div>
     )
} 

export default Cards