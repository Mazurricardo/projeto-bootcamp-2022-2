import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import '../../styles/EditProducts.css'
import FormPropsFields from './EditProductsBtn'
import { FormControl } from '@mui/material'

function EditProduct() {
  return (
    <div>
      <Header />
      <main className="WrapperEditProduct">
        <div className="EditProductMain">
          <div className="Container">
            <div className="PaiDosInput">
              <div>
                <Link className="HomeLinkEditProduct" to={'/'}>
                  Home{' '}
                </Link>
                <u className="AdicionarBHome">&#62; Editar</u>
              </div>
              <h1 className="EditarProduto">Editar Produtos</h1>

              <FormPropsFields />
              {/* <FormControl /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default EditProduct
