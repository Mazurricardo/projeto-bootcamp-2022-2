import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import FormPropsTextFields from './AddProducts'
import Imagem1 from './imagens/IM1.png'
import './../../styles/CartStyles.css'
import BuyButtonCart from './Buttons/AddBuyButton.js'
import { productFake } from './FakeData.js'
import Products from './Products'
function Cart() {
  console.log(productFake[0])
  return (
    <div className="PaginaCart">
      <Header />
      <Link to={'/'}>Home{''}</Link>
      <div className="Introducao">
        <h1>Carrinho</h1>
        <h2>Resumo do pedido</h2>
      </div>
      <div className="ConteudoTotal">
        <div className="E">
          <div className="InformacoesProduto">
            <img className="ImagemCamera" src={Imagem1} alt="imagem camera" />
            <div className="Description">
              <h2>Câmera interna inteligente Wi-Fi Full HD iM3</h2>
              <h2>Intelbras</h2>
              <h2>Cor:Branco</h2>
              <hr />
            </div>
          </div>
          <div className="LinhaQuantidade">
            <div className="QtdContador">
              <h2>Quantidade</h2>
              <button>Contador</button>
            </div>
            <div>R$ 300,00</div>
          </div>
        </div>
        <div className="D">
          <div className="LinhaSubtotal">
            <div>Subtotal(1 item)</div>
            <div>R$ 300,00</div>
          </div>
          <hr />
          <div className="LinhaFrete">
            <div>Frete</div>
            <div>R$ 30,00</div>
          </div>
          <hr />
          <div className="LinhaValorTotal">
            <div>Valor Total</div>
            <div>R$ 330,00</div>
          </div>
          <hr />
          <div className="BuyButtonCart">
            <BuyButtonCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
