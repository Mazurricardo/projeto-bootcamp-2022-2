import { Link } from 'react-router-dom'
import AddBuyButton from '../../icons/AddBuyButton'
import AddDeleteButton from '../../icons/AddDeleteButton'
import AddEditButton from '../../icons/AddEditButton'
import imagem1 from './imagens/IM1.png'

function Products({ product }) {
  return (
    <div className="pai">
      <figure>
        <img className={`img${product.id}`} src={product.img} alt="camera" />
      </figure>
      <div className="Description">
        <h1 className="ProductName">{product.name}</h1>
        <h2 className="ProductBrand">{product.brand}</h2>
        <h2 className="ProductPrice">{product.price}</h2>
        <h2 className="ProductColor">{product.color}</h2>
      </div>
      <div className="PaiIcones">
        <div onClick={() => console.log('buy')}>
          <Link to="/carrinho">
            <AddBuyButton />
          </Link>
        </div>
        <div onClick={() => console.log('edit')}>
          <Link to="/editar">
            <AddEditButton />
          </Link>
        </div>
        <div onClick={() => console.log('delete')}>
          <AddDeleteButton />
        </div>
      </div>
    </div>
  )
}

export default Products
