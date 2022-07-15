import '../../src/styles/Home.css'
import AddCircle from '../icons/AddCircle'
import Products from '../components/Products/Products'
import Header from './Header'
import { productFake } from '../components/Products/FakeData'

function Home() {
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
              return <Products product={item} />
            })}
          </div>
        </div>
      </main>
    </body>
  )
}

export default Home
