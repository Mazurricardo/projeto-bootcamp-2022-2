import Header from '../../Pages/Header.js'
import { Link } from 'react-router-dom'
import '../../styles/EditProducts.css'
import FormPropsTextFields from './Buttons/Button'
import { FormControl } from '@mui/material'

function EditProduct() {
  return (
    <div>
      <Header />
      <main className="WrapperEditProduct">
        <div className="EditProductMain">
          <div className="Container">
            <div className="PaiDosInput">
              <Link className="HomeLinkEditProduct" to={'/'}>
                Home{' '}
              </Link>
              <h1 className="EditarProduto">Editar Produto</h1>

              <FormPropsTextFields />
              <FormControl />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default EditProduct
