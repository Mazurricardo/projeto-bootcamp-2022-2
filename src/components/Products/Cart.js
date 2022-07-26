import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import FormPropsTextFields from './AddProducts'
import Imagem1 from './imagens/IM1.png'
import './../../styles/CartStyles.css'
import BuyButtonCart from './Buttons/AddBuyButton.js'
import { productFake } from './FakeData.js'
import Products from './Products'
import Counter from './Buttons/Counter'
function Cart() {
  console.log(productFake[0])
  return (
    <div className="PaginaCart">
      <Header />
      <div className="ButtonHome">
        <Link to={'/'}>Home{''}</Link>
        <p className="CarrinhoNaBarraHome">
          {' '}
          <u>&#62; Carrinho</u>{' '}
        </p>
      </div>
      <div className="Introducao">
        <h2 className="Title">Carrinho</h2>
        <h2 className="Title ResumoTitle">Resumo do pedido</h2>
      </div>

      <div className="ConteudoTotal">
        <div className="E">
          <div className="InformacoesProduto">
            <img className="ImagemCamera" src={Imagem1} alt="imagem camera" />
            <div className="Description">
              <h2>Câmera interna inteligente Wi-Fi Full HD iM3</h2>
              <p className="BandAndColor">Intelbras</p>
              <p className="BandAndColor">Cor:Branco</p>
            </div>
          </div>
          <hr className="Divider" />
          <div className="LinhaQuantidade">
            <div className="QtdContador">
              <h2>Quantidade</h2>
              <Counter />
            </div>
            <div>R$ 300,00</div>
          </div>
        </div>
        <div className="D">
          <div className="DescriptionD">
            <div className="LinhaSubtotal">
              <div>Subtotal(1 item)</div>
              <div className="ValorS">R$ 300,00</div>
            </div>
            <hr />
            <div className="LinhaFrete">
              <div>Frete</div>
              <div className="ValorF">R$ 30,00</div>
            </div>
            <hr />
            <div className="LinhaValorTotal">
              <div>Valor Total</div>
              <div className="ValorVT">R$ 330,00</div>
            </div>
          </div>
          <div className="BuyButtonCart">
            <BuyButtonCart />
          </div>
          <div className="PagamentoRealizado">
            <h2 className="PagamentoRealizadoH2">
              Pagamento realizado com Sucesso!{' '}
            </h2>
            <p>Este pagamento foi realizado com </p>
            <p>3 cédulas de R$ 100,00</p>
            <p>1 cédula de R$ 20,00</p>
            <p>1 cédula de R$ 10,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
