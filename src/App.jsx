import "./App.css";

import Banner from "./assets/components/Banner";
import Categorias from './assets/components/Categorias';
import Cards from './assets/components/Cards';


function App() {
  return (
    <div className="container">
      <Banner />
      
      <Categorias />

      <Cards />
      
    </div>

    // tempo 1:11:00 - props
  );
}

export default App