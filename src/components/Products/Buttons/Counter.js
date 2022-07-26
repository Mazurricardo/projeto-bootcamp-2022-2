import { useState } from 'react'
import '../../../styles/StylesCounters.css'

export default function Contador(props) {
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const [Count, setCount] = useState(0)
  return (
    <div className="ContadorGeral">
      <button className="BtnDecrescente" onClick={handleDecrement}>
        -
      </button>
      {Count}

      <button className="BtnCrescente" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}
