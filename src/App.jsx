import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Agency from './components/Agency'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Agency />
  {/* <Hero />
  <Stats /> */}
  </div>
  )
}

export default App
