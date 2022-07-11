import logo from './logo.svg'
import './App.css'
// import HelloWorld from './components/HelloWorld'
// import Imagem1 from './components/Products/Products/imagem1'
import Imagem2 from './imagens/IM2.png'
import Imagem3 from './imagens/IM3.png'
import LogoVip from './imagens/LogoViptech.png'
import AddCircle from './icons/AddCircle'
import Products from './components/Products/Products'
import Header from './Header'
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
            <h2 className="Produtos">Produtos</h2>
            <button className="EstiloBotao">
              <span className="SpanButton">
                <AddCircle />
              </span>
              adicionar produto
            </button>
            {/* <Button variant='contained' startIcon={<AddCircle />}>insira</Button> */}
          </div>
          {/* <HelloWorld /> */}
          <div className="pai"></div>
          <div>
            <div className="pai2">
              <img className="img2" src={Imagem2} alt="camera sensor" />

              <nav>
                <h1>Câmera DS-2CD 2583G2-I</h1>
                <h2>Hikvision</h2>
                <h2>R$ 645,00</h2>
                <h2>Cor: Branco</h2>
              </nav>
            </div>
          </div>
          <div className="pai3">
            <img className="img3" src={Imagem3} alt="Camera interna"></img>

            <nav>
              <h1 className="NameProduct">
                Câmera interna inteligente Wi-Fi Full HD iM4
              </h1>
              <h2 className="Mark">Intelbras</h2>
              <h2 className="Price">R$ 349,00</h2>
              <h2 classname="ColorOfProduct">Cor: Branco</h2>
            </nav>
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
