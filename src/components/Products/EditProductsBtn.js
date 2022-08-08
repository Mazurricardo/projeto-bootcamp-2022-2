import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import BasicButtons from '../../components/Products/Buttons/AddBasicButton'
import BaselineAdd from '../Products/imagens/BaselineAdd.png'
import './../../styles/BaselineAdd.css'
import * as yup from 'yup'
// import { userSchema } from '../../../Validations/UserValidations'
import api from './api'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { productFake } from './FakeData'

export default function FormPropsFields() {
  const navigate = useNavigate()
  const [nome, setNome] = React.useState(' ')
  const [marca, setBand] = React.useState('')
  const [valor, setPrice] = React.useState('')
  const [color, setColor] = React.useState('Azul')
  const [product, setProduct] = React.useState([])
  const { id } = useParams()
  useEffect(() => {
    setNome(product.name)
    setBand(product.band)
    setPrice(product.price)
    setColor(product.color)
  }, [product])

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/product/${id}`)

        setProduct(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [id])
  async function handleSubmit() {
    try {
      api.put(`/product/${id}`, {
        name: nome,
        band: marca,
        price: parseFloat(valor),
        color: color,
      })
      navigate('/')
      console.log(nome, marca, valor, color)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeName(e) {
    console.log(e.target.value)
    setNome(e.target.value)
  }

  function handleChangeBand(e) {
    setBand(e.target.value)
  }
  function handleChangePrice(e) {
    setPrice(e.target.value)
  }

  const fImage = React.useRef()
  const ImgRef = React.useRef()

  const handleclick = () => {
    const reader = new FileReader()
    fImage.current.click()
    fImage.current.addEventListener('change', (event) => {
      reader.onload = () => {
        // console.log('rodou')
        ImgRef.current.src = reader.result
      }
      reader.readAsDataURL(fImage.current.files[0])
    })
  }

  function handleChange(event) {
    console.log(event)

    setColor(event.target.value)
  }

  return (
    <>
      {Object.keys(product).length && (
        <Box
          component="form"
          // sx={{
          //   '& .MuiTextField-root': { m: 1, width: '25ch' },
          // }}
          autoComplete="off"
        >
          <div className="NomeProdutoEdit">
            <TextField
              fullWidth
              id="outlined-search"
              label="Nome do produto"
              type="search"
              placeholder="Digite o nome do produto"
              value={nome}
              onChange={handleChangeName}
            />
          </div>
          <div className="BandOfProductEdit">
            <TextField
              fullWidth
              id="outlined-search"
              label="Marca"
              type="search"
              placeholder="Digite a marca do produto"
              value={marca}
              onChange={handleChangeBand}
            />
          </div>

          <div className="ValueOfProductEdit">
            <TextField
              id="outlined-search"
              label="Valor"
              type="search"
              placeholder="R$ 000,00"
              value={valor}
              onChange={handleChangePrice}
            />
          </div>

          <div className="WidthOfInputDate">
            <div className="EditColorButton">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cor</InputLabel>
                {color && (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Cor"
                    onChange={handleChange}
                    size=""
                    placeholder="Selecione a cor"
                    value={color}
                  >
                    <MenuItem value={'Azul'}>Azul</MenuItem>
                    <MenuItem value={'Branco'}>Branco</MenuItem>
                    <MenuItem value={'Preto'}>Preto</MenuItem>
                    <MenuItem value={'Roxo'}>Roxo</MenuItem>
                  </Select>
                )}
              </FormControl>
            </div>
          </div>
          <TextField className="EditDateButton" type={'date'} />
          <div className="Box" onClick={handleclick}>
            <img
              ref={ImgRef}
              id="BaselineAddImage"
              src={product.image}
              alt="add foto"
            />
          </div>
          <input
            type="file"
            id="fImage"
            name="fImage"
            accept="image/*"
            ref={fImage}
            hidden
            onClick={() => console.log(fImage.current)}
          ></input>
          <div className="BtnAddProductEdit">
            <BasicButtons onSubmit={handleSubmit} />
          </div>
        </Box>
      )}
    </>
  )
}
