import { useCallback, useState } from "react"
import useTimeout from "./useTimeout"

export default function TimeoutComponent() {
  const [count, setCount] = useState(10)
  const timeoutCallback = useCallback(() => setCount(0),[])
  const delay = 1000
  const { clear, reset } = useTimeout(timeoutCallback, delay)

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  )
}
