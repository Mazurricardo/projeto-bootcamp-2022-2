import * as React from 'react'
import FormPropsTextFields from './Buttons/Button.js'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import BasicButtons from './Buttons/AddBasicButton'
import BaselineAdd from '../Products/imagens/BaselineAdd.png'
import Header from './../../Pages/Header'
import './../../styles/BaseLine.css'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

function AddProducts() {
  return (
    <div>
      <Header />
      <main className="WrapperEditProduct">
        <div className="EditProductMain">
          <div className="Container">
            <div className="PaiDosInput">
              {/* <Link className="HomeLinkEditProduct" to={'/'}>
                Home{' '}
              </Link> */}
              <h1 className="EditarProduto">Adicionar Produto</h1>

              <FormPropsTextFields />
              <FormControl />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddProducts
