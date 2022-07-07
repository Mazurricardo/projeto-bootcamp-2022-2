import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const imagem = 'https://www.viptech.com.br/img/logo_viptech_footer.png'
  
  return (
    <div className='viptech'>
      <h2>
        Eu estou testando as maquinas da
      </h2>
      <div className='Colors'>
      <img src={imagem} alt="imagem viptech" />
        </div>

      <div className='Linha-um'>
        <h2 className='Produtos'>
          Produtos
        </h2>
        <button className='EstiloBotao'>
          adicionar produto
        </button>
      </div>

      <HelloWorld />
    </div>
   
  );
}

export default App;
