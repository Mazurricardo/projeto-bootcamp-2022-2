import * as React from 'react'
import FormPropsTextFields from './Buttons/Button.js'
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
  const [product, setProduct] = React.useState([])

  React.useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProduct(data.product)
    })
    console.log(product)
  }, [])
  return (
    <>
      <>
        {product?.map((product) => (
          <product
            key={product.id}
            id={product.id}
            name={product.name}
            band={product.band}
            color={product.color}
          />
        ))}
      </>
    </>

    // <div>
    //   <Header />
    //   <div className="WrapperEditProduct">
    //     <div className="EditProductMain">
    //       <div className="Container">
    //         <div className="PaiDosInput">
    //           {/* <Link className="HomeLinkEditProduct" to={'/'}>
    //             Home{' '}
    //           </Link> */}
    //           <h1 className="EditarProduto">Adicionar Produto</h1>

    //           <FormPropsTextFields />
    //           <FormControl />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}

export default AddProducts
