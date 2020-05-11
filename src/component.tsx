import React from 'react';
import { useState, useCallback } from "react"

const Component: React.FC = () => {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Component