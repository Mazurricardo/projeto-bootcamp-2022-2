import * as React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

export default function BuyButtonCart({ showCaixa, open }) {
  console.log(showCaixa)
  return (
    <div className="BasicButtonsDiv">
      {/* <Stack spacing={2} direction="row"> */}
      <Button disabled={open} fullWidth variant="contained" onClick={showCaixa}>
        Pagar
      </Button>
      {/* </Stack> */}
    </div>
  )
}
