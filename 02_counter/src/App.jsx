import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter += 1
    setCounter(counter + 1)
    // setCounter(counter + 1) -> it will not effect
    // a batch will be created because of useState()
    // but if you want to do it like this only
    // setCounter(counter => counter + 1)
  }

  const removeValue = () => {
    // counter -= 1
    if (counter > 0) {
      setCounter(counter - 1)
    }
    
  }
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
