import { useState } from "react"


const Categorias = () => {
  // Hook
  // variavel de Estado
  const [numCategoriaSelecionada, SetNumCategoriaSelecionada] = useState(0)
  
  //forma correta
  // SetNumCategoriaSelecionada(1)

  return (
    <div className="categorias">
      <p 
        className={
          // se categoria concatenada selecionada e for === 0 - selecione categoria desejada
          "categoria" + (numCategoriaSelecionada === 0 ? " categoria--selecionada" 
          : "") // senao concatene com vazio 
        }
        onClick={() => SetNumCategoriaSelecionada(0)}
      >Pratos Principais</p>

      <p 
        className={
          // se categoria concatenada selecionada e for === 1 - selecione categoria desejada
          "categoria" + (numCategoriaSelecionada === 1 ? " categoria--selecionada" : "") // senao concatene com vazio 
        }
        onClick={() => SetNumCategoriaSelecionada(1)}
        >Sobremesas</p>

      <p 
        className={
          // se categoria concatenada selecionada e for === 2 - selecione categoria desejada
          "categoria" + (numCategoriaSelecionada === 2 ? " categoria--selecionada" : "") // senao concatene com vazio 
        }
        onClick={() => SetNumCategoriaSelecionada(2)}
        >Bebidas</p>
    </div>
  )
}

export default Categorias