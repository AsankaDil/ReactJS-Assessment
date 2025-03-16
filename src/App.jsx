import { useState } from 'react'
import './App.css'
import SalesMainLayout from './layouts/salesMainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<SalesMainLayout/>
    </>
  )
}

export default App
