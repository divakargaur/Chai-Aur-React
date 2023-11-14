import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(16)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pas = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "`~!@#$%^&*()-_=+[]{}|;:',.<>/?`"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pas += str.charAt(index)
    }

    setPassword(pas)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='p-10 h-auto w-auto text-center bg-black rounded-3xl'>
      <div className='p-4 flex justify-center'>
        <input type='text' value={password} readOnly ref={passwordRef} className='outline-none h-10 w-80 bg-white text-black text-center text-xl rounded-l-2xl'></input>
        <button onClick={copyPassword} className='bg-blue-900 rounded-r-2xl px-3 border-solid'>copy</button>
      </div>
      <div className='p-4 flex justify-evenly'>
        <div className='flex'>
          <input type='range' min={8} max={24} name='length' value={length} onChange={event => setLength(event.target.value)}></input>
          <label htmlFor='length'>Length({length})</label>
        </div>
        <div className='flex'>
          <input type='checkbox' name='number' defaultChecked = {numberAllowed} onChange={() => setNumberAllowed(prev => !prev)}></input>
          <label htmlFor='number'>Number</label>
        </div>
        <div className='flex'>
          <input type='checkbox' name='character' defaultChecked = {charAllowed} onChange={() => setCharAllowed(prev => !prev)}></input>
          <label htmlFor='character'>Character</label>
        </div>
      </div>    
    </div>
  )
}

export default App
