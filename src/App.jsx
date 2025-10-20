import React from 'react'
import "./App.css";
import imgRestaurante from "./assets/restaurante.webp";
import Categorias from './assets/components/Categorias';
import imgBurguer from "./assets/pratos/burguer-picanha.jpeg";

function App() {
  return (
    <div className="container">
      <div className="banner">
        <img src={ imgRestaurante } alt="Banner do Restaurante" />
      </div>

      <Categorias/>

      <div className="cards">
        <div className="card">
          <div className="card__textos">
            <h2 className="card__titulo">Burguer de Picanha</h2>
            <p>Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon</p>
            <p className="card__preco">R$ 44.90</p>
          </div>
          
          <div className="card__img">
            <img src={ imgBurguer } alt="Foto do Produto" />
          </div>
        </div>

        <div className="card">
          <div className="card__textos">
            <h2 className="card__titulo">Burguer de Picanha</h2>
            <p>Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon</p>
            <p className="card__preco">R$ 44.90</p>
          </div>
          
          <div className="card__img">
            <img src={ imgBurguer } alt="Foto do Produto" />
          </div>
        </div>

        <div className="card">
          <div className="card__textos">
            <h2 className="card__titulo">Burguer de Picanha</h2>
            <p>Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon</p>
            <p className="card__preco">R$ 44.90</p>
          </div>
          
          <div className="card__img">
            <img src={ imgBurguer } alt="Foto do Produto" />
          </div>
        </div>

        <div className="card">
          <div className="card__textos">
            <h2 className="card__titulo">Burguer de Picanha</h2>
            <p>Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon</p>
            <p className="card__preco">R$ 44.90</p>
          </div>
          
          <div className="card__img">
            <img src={ imgBurguer } alt="Foto do Produto" />
          </div>
        </div>

        <div className="card">
          <div className="card__textos">
            <h2 className="card__titulo">Burguer de Picanha</h2>
            <p>Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon</p>
            <p className="card__preco">R$ 44.90</p>
          </div>
          
          <div className="card__img">
            <img src={ imgBurguer } alt="Foto do Produto" />
          </div>
        </div>
      </div>
    </div>

    // tempo 58:00
  );
}

export default App