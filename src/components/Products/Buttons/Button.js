import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import BasicButtons from './AddBasicButton'
import BaselineAdd from '../imagens/BaselineAdd.png'
import './../../../styles/BaseLine.css'
import * as yup from 'yup'
// import { userSchema } from '../../../Validations/UserValidations'
import api from '../api'
// import Home from './../../../Pages/Home'
// import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

export default function FormPropsTextFields() {
  const navigate = useNavigate()
  const [nome, setNome] = React.useState('')
  const [marca, setBand] = React.useState('')
  const [valor, setPrice] = React.useState('')
  const [color, setColor] = React.useState('Azul')
  const [imagem, setImagem] = React.useState('')
  // const navigate = useNavigate()

  async function handleSubmit() {
    const file = new FormData()
    file.append('fImage', imagem)
    file.append('name', nome)
    file.append('band', marca)
    file.append('price', valor)
    file.append('color', color)

    try {
      await api.post('/product', file)
    } catch (error) {
      console.log(error)
    }
    console.log(nome, marca, valor, color)
    navigate('/')
  }

  function handleChangeName(e) {
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
        console.log('rodou')
        ImgRef.current.src = reader.result
        setImagem(fImage.current.files[0])
      }
      reader.readAsDataURL(fImage.current.files[0])
    })
  }

  function handleChange(event) {
    console.log(event)

    setColor(event.target.value)
  }

  return (
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
          </FormControl>
        </div>
      </div>
      <TextField className="EditDateButton" type={'date'} />
      <div className="Box" onClick={handleclick}>
        <img
          ref={ImgRef}
          id="BaselineAddImage"
          src={BaselineAdd}
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
  )
}
