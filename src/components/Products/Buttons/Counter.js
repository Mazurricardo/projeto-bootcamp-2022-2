import { useState } from 'react'
import '../../../styles/StylesCounters.css'

export default function Contador({ setInputValue }) {
  const handleIncrement = () => {
    setCount(Count + 1)
    setInputValue((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setCount(Count - 1)
    setInputValue((prev) => prev - 1)
  }

  const [Count, setCount] = useState(1)
  console.log(Count)
  return (
    <div className="ContadorGeral">
      <button
        disabled={Count <= 1}
        className="BtnDecrescente"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="Contagem" onChange={(e) => setCount(e.target.value)}>
        {Count}
      </div>

      <button className="BtnCrescente" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}
