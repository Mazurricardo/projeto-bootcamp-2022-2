import * as React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'
import Home from '../../../Pages/Home'

export default function BasicButtons({ onSubmit }) {
  let navigate = useNavigate()

  return (
    <div className="BasicButtonsDiv">
      <Stack spacing={2} direction="row">
        <Button onClick={onSubmit} variant="contained">
          Adicionar Produto
        </Button>
      </Stack>
    </div>
  )
}
