import * as React from 'react'
import './../../../styles/BaseLineAdd.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import BasicButtons from './AddBasicButton'
import BaselineAdd from '../imagens/BaselineAdd.png'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

export default function FormPropsTextFields() {
  const [color, setColor] = React.useState('Azul')

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
      noValidate
      autoComplete="off"
    >
      <div className="NomeProdutoEdit">
        <TextField
          fullWidth
          id="outlined-search"
          label="Nome do produto"
          type="search"
        />
      </div>
      <div className="BandOfProductEdit">
        <TextField fullWidth id="outlined-search" label="Marca" type="search" />
      </div>

      <div className="ValueOfProductEdit">
        <TextField id="outlined-search" label="Valor" type="search" />
      </div>

      <div className="WidthOfInputDate">
        <div className="EditColorButton">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Cor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Cor"
              onChange={handleChange}
              size=""
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
      <div className="Box">
        <img id="BaseLineAdd" src={BaselineAdd} alt="add foto" />
      </div>
      <input type={'file'} id="fImage" name="fImage" accept="image/*"></input>
      <div className="BtnAddProductEdit">
        <BasicButtons />
      </div>
    </Box>
  )
}
