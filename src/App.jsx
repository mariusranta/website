import { useState } from 'react'
import HomepageImage from './components/HomepageImage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomepageImage />
      <h1>marius' personal website</h1>
      <p>00010101011101111101101110</p>
    </div>
  )
}

export default App
