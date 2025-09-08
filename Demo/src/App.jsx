import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    alert('increase the count')
  }, [count])

  useEffect(() => {
    alert('refresh the page')
  })

  return (
    <>
      <div className="App">
        <h1>use useEffect click the button {count}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count
          </button>
        </div>
      </div>
    </>
  )
}

export default App
