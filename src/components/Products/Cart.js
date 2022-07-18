import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import FormPropsTextFields from './AddProducts'
import Imagem1 from './imagens/IM1.png'
import './../../styles/CartStyles.css'
import BuyButtonCart from './Buttons/AddBuyButton.js'

function Cart() {
  return (
    <div className="PaginaCart">
      <Header />
      <Link to={'/'}>Home{''}</Link>
      <div className="TitulosPrincipaisCarrinho">
        <h1>Carrinho</h1>
        <h1>Resumo Do Pedido</h1>
      </div>
      <div className="PaginaCarrinhoCompleta">
        <div className="esquerda">
          <div className="ProdutoEdescricao">
            <img className="ImgCarrinho" src={Imagem1} alt="Imagem De Camera" />
            <div className="Descricao">
              <h1>Camera interna inteligente Wi-fi Full HD IM3</h1>
              <h2>intelbras</h2>
              <h2>Cor:Branco</h2>
            </div>
          </div>
          <div className="QuantidadeEpreco">
            <h2>Quantidade</h2>
            <h2>Contador</h2>
            <h2>Preço</h2>
          </div>
        </div>
        <div className="Direita">
          <h2>Subtotal(1item) R$ 300,00</h2>
          <h2>Frete R$ 30,00</h2>
          <h2>Valor Total R$ 330,00</h2>
          <BuyButtonCart />
        </div>
      </div>
    </div>
  )
}

export default Cart
