import "./App.css";

import Banner from "./assets/components/Banner";
import Categorias from './assets/components/Categorias';
import Cards from './assets/components/Cards';
import { useState } from "react";


function App() {

  // Hook
  // variavel de Estado
  const [numCategoriaSelecionada, SetNumCategoriaSelecionada] = useState(0)
  
  //forma correta
  // SetNumCategoriaSelecionada(1)

  return (
    <div className="container">
      <Banner />
      
      <Categorias 
        numCategoriaSelecionada={numCategoriaSelecionada}
        SetNumCategoriaSelecionada={SetNumCategoriaSelecionada} 
      />

      <Cards numCategoriaSelecionada={numCategoriaSelecionada}/>
      
    </div>

    // tempo 2:01:00 - apresentar produtos em tela ao clicar nas abas
  );
}

export default App