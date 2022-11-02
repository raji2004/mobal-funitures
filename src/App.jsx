import { useState } from 'react'
import reactLogo from './assets/bg.svg'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />

       <img src={reactLogo} className={'size'} alt="" />
    </div>
  )
}

export default App
