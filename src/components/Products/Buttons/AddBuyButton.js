import * as React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

export default function BuyButtonCart() {
  return (
    <div className="BasicButtonsDiv">
      {/* <Stack spacing={2} direction="row"> */}
        <Button fullWidth variant="contained">Pagar</Button>
      {/* </Stack> */}
    </div>
  )
}
