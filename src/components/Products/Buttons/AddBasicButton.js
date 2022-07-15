import * as React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

export default function BasicButtons() {
  return (
    <div className="BasicButtonsDiv">
      <Stack spacing={2} direction="row">
        <Button variant="contained">Adicionar Produto</Button>
      </Stack>
    </div>
  )
}
