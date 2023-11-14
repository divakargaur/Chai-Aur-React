import Card from './components/Card'

function App() {
  let myobj = {
    username: "hitesh",
    age:21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="chaiaurcode" someobj={myobj} someeobj={newArr}/>
      <Card username="hitesh" btnText="VISIT ME"/>
    </>
  )
}

export default App
