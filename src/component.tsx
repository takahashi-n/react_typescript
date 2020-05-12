import React, { useState, useCallback, useMemo } from "react"

const Component: React.FC = () => {
  const [count, setCount] = useState<number | null>(0)
  const double = useMemo<number | null>(() => {
    if (count === null) return null
    return count * 2
  }, [count])
  const doubleWithUnit = useMemo<string | null>(() => {
    if (double === null) return null
    return `${double} pt`
  }, [double])
  const handleClick = useCallback(() => {
    setCount(prev => {
      if (prev === null) return 0
      return prev + 1
    })
  }, [])
  return (
    <div>
      <p>count : {count}</p>
      <p>double : {double}</p>
      <p>doubleWithUnit : {doubleWithUnit}</p>        
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Component