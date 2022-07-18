import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import FormPropsTextFields from './AddProducts'
import Imagem1 from './imagens/IM1.png'
import './../../styles/CartStyles.css'
import BuyButtonCart from './Buttons/AddBuyButton.js'
import { productFake } from './FakeData.js'
import Products from './Products'
function Cart() {
  console.log(productFake[0]);
  return (

    <div className="PaginaCart">
      <Header />
      <Link to={'/'}>Home{''}</Link>
      <div className="Introducao">
        <h1>Carrinho</h1>
        <h2>Resumo do pedido</h2>
      </div>
      <div className="ConteudoTotal">
        <div className='E'>
      <div className='InformacoesProduto'>
      <img/>
      <div className='Description'>
        <h2>Câmera interna inteligente Wi-Fi Full HD iM3</h2>
        <h2>Intelbras</h2>
        <h2>Cor:Branco</h2>
      </div>
      
      

    


      </div>

        </div>
        <div className='D'> Direita</div>

      </div>

      </div>
      
  )
}

export default Cart
