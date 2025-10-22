import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "./../cardapio"

const Cards = () => {
    const itensCategoria = [pratosPrincipais, sobremesas, bebidas]
    const categoriaSelecionada = itensCategoria[2]

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