import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import FormPropsTextFields from './AddProducts'
import Imagem1 from './imagens/IM1.png'
import './../../styles/CartStyles.css'
import BuyButtonCart from './Buttons/AddBuyButton.js'
import { productFake } from './FakeData.js'
import Products from './Products'
import Counter from './Buttons/Counter'
import formatNumber from './Buttons/formatNumber.js'
// import { useRef } from 'react'
import { style } from '@mui/system'
import { useState, useEffect } from 'react'
import api from './api.js'
import { useParams } from 'react-router-dom'
import contagemNumeroNotas from '../LogicaNotas.js'

function Cart({ Count }) {
  const [notes, numberNotes] = useState([])
  const { id } = useParams()
  const [product, setProduct] = useState('')
  const [inputValue, setInputValue] = useState(1)
  const [open, setOpen] = useState(false)
  const subTotal = product.price * inputValue
  const frete = subTotal * 0.1
  const total = subTotal + frete

  console.log(product)

  const handlePurchase = () => {
    numberNotes(contagemNumeroNotas(total))

    setOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/product/${id}`)

        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [id])

  function showCaixa() {
    const getCaixa = document.getElementById('efeitoBotaoPagar')
    getCaixa.style.opacity = '1'

    console.log('esta Funcionando')
  }

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
              <h2>Quantidade:</h2>
              <Counter setInputValue={setInputValue} />
            </div>
            <div>R$ 300,00</div>
          </div>
        </div>
        <div className="D">
          <div className="DescriptionD">
            <div className="LinhaSubtotal">
              <div>Subtotal: {inputValue} item</div>
              <div className="ValorS">{`R$ ${formatNumber(subTotal)}`}</div>
            </div>
            <hr />
            <div className="LinhaFrete">
              <div>Frete</div>
              <div className="ValorF">{frete}</div>
            </div>
            <hr />
            <div className="LinhaValorTotal">
              <div>Valor Total</div>
              <div className="ValorVT">{total}</div>
            </div>
          </div>
          <div
            id="efeitoBotaoPagar"
            className="efeitoBotaoPagar"
            // onClick={showCaixa}
          >
            <div className="BuyButtonCart">
              <BuyButtonCart showCaixa={handlePurchase} open={open} />
            </div>
            {open && (
              <div className="PagamentoRealizado">
                <h2 className="PagamentoRealizadoH2">
                  Pagamento realizado com Sucesso!{' '}
                </h2>
                <p>Este pagamento foi realizado com </p>
                {notes.map((item) => (
                  <p>
                    {item.amount}cédula de R${item.bankNote}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
