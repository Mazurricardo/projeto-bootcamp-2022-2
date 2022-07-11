import logo from './logo.svg'
import './App.css'
// import HelloWorld from './components/HelloWorld'
import Imagem1 from './components/Products/imagens/IM1.png'
import Imagem2 from './components/Products/imagens/IM2.png'
import Imagem3 from './components/Products/imagens/IM3.png'
// import LogoVip from './imagens/LogoViptech.png'
import AddCircle from './icons/AddCircle'
import Products from './components/Products/Products'
import Header from './Header'
import { productFake } from './components/Products/FakeData'
// import { Button } from '@mui/material';
// import { AddCircle } from "@mui/icons-material"

function App() {
  // const imagem = 'https://www.viptech.com.br/img/logo_viptech_footer.png'

  return (
    <body>
      <Header />

      <main className="paidetodos">
        <div className="wrapper">
          <div className="Linha-um">
            <p className="Produtos">Produtos</p>
            <button className="EstiloBotao">
              <span className="SpanButton">
                <AddCircle />
              </span>
              adicionar produto
            </button>
          </div>
          <div>
            {productFake.map((item) => {
              
              return  <Products product={item} />
            })}
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
