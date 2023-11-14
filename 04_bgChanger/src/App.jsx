import { useState } from 'react'
import './App.css'

const body = document.getElementById("root")

function App() {
  const [color, setColor] = useState("black")

  body.style.background = color

  return (
    <main>
      <div id='container'>
        <div id='work-area'>
          <button onClick={() => setColor("violet")}>VIOLET</button>
          <button onClick={() => setColor("indigo")}>INDIGO</button>
          <button onClick={() => setColor("blue")}>BLUE</button>
          <button onClick={() => setColor("green")}>GREEN</button>
          <button onClick={() => setColor("yellow")}>YELLOW</button>
          <button onClick={() => setColor("orange")}>ORANGE</button>
          <button onClick={() => setColor("red")}>RED</button>
        </div>
      </div>
      <h1>{color.toUpperCase()}</h1>
    </main>
  )
}

export default App
