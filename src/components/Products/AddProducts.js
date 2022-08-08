import * as React from 'react'
import FormPropsTextFields from './Buttons/Button.js'
import { Link } from 'react-router-dom'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import BasicButtons from './Buttons/AddBasicButton'
// import BaselineAdd from '../Products/imagens/BaselineAdd.png'
import api from './../Products/api'
import Header from './../../Pages/Header'
import './../../styles/BaseLine.css'
import {
  FormControl,
  // InputLabel,
  // MenuItem,
  // Select,
  // TextField,
} from '@mui/material'

function AddProducts() {
  return (
    <div>
      <Header />
      <div className="WrapperEditProduct">
        <div className="EditProductMain">
          <div className="Container">
            <div className="PaiDosInput">
              <div className="homeAddProductLink">
                <Link className="HomeLinkEditProduct" to={'/'}>
                  Home{' '}
                </Link>
                <u className="AdicionarHome">&#62; Adicionar</u>
              </div>
              <h1 className="EditarProduto">Adicionar Produto</h1>

              <FormPropsTextFields />
              <FormControl />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProducts
