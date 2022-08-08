import { Link } from 'react-router-dom'
import AddBuyButton from '../../icons/AddBuyButton'
import AddDeleteButton from '../../icons/AddDeleteButton'
import AddEditButton from '../../icons/AddEditButton'
import api from './api'
import imagem1 from './imagens/IM1.png'
import './../../styles/productsStyles.css'

function Products({ product }) {
  console.log(product)
  const handleDelete = async () => {
    await api.delete(`/product/${product.id}`)
    window.location.reload()
  }
  return (
    <>
      <div className="pai">
        <figure className="imagemCamera">
          <img
            className={`img${product.id}`}
            src={product.image}
            alt="camera"
          />
        </figure>

        <div className="Description">
          <h1 className="ProductName">{product.name}</h1>
          <h2 className="ProductBrand">{product.band}</h2>
          <h2 className="ProductPrice">R$ {product.price}</h2>
          <h2 className="ProductColor">Cor: {product.color}</h2>
        </div>
        <div className="PaiIcones">
          <div onClick={() => console.log('buy')}>
            <Link to={`/carrinho/${product.id}`}>
              <AddBuyButton />
            </Link>
          </div>
          <div onClick={() => console.log('edit')}>
            <Link to={`/editar/${product.id}`}>
              <AddEditButton />
            </Link>
          </div>
          <div
            className="DeleteButton"
            onClick={() => handleDelete(product.id)}
          >
            <AddDeleteButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
