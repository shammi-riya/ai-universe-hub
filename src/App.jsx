import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Button from './Component/Button/Button'
import Card from './Component/Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Card></Card>
     
    </>
  )
}

export default App
