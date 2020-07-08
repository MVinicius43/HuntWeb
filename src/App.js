import React from 'react';
import Routes from './routes';
import './styles.css';
import Header from './components/Header';
import Main from './pages/main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;


//Um Component é um conjunto de parte visual (HTML) + 
// parte funcional (JS) +  
// parte de estilização

//esse conjunto encapsulado em um trecho de código forma um Component 
// Component é um pedaço isolado de lógica + estrutura + estilização