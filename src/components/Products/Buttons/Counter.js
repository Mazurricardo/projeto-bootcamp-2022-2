import { useState } from "react"

export default function Contador (props) {
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const [Count, setCount] = useState(0);
    return (
        <div>
            <div>
                <button onClick={handleDecrement}>-</button>
                {Count}
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}