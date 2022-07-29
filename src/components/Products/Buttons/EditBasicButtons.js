import * as React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

export default function BasicButtons({ onSubmit }) {
  return (
    <div className="BasicButtonsDiv">
      <Stack spacing={2} direction="row">
        <Button type="submit" onClick={onSubmit} variant="contained">
          Adicionar Produto
        </Button>
      </Stack>
    </div>
  )
}
