import '../../src/styles/Home.css'
import AddCircle from '../icons/AddCircle'
import Products from '../components/Products/Products'
import Header from './Header'
import { productFake } from '../components/Products/FakeData'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import api from '../components/Products/api'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get('/product')
        console.log(data)

        setProducts(data)
        console.log(products)
      } catch (error) {
        console.log('error')
      }
    }
    fetch()
  }, [])

  return (
    <>
      <Header />

      <main className="paidetodos">
        <div className="wrapper">
          <div className="Linha-um">
            <p className="Produtos">Produtos</p>
            <Link to="/comprar" style={{ textDecoration: 'none' }}>
              <button className="EstiloBotao">
                <span className="SpanButton">
                  <AddCircle />
                </span>
                adicionar produto
              </button>
            </Link>
          </div>
          <div>
            {products.map((item) => (
              <Products key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
