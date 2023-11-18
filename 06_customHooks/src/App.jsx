import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => setConvertedAmount(amount * currencyInfo[to])

    return (
        <div className='bg-black h-screen w-screen flex flex-col items-center'>
            <h1 className='text-white text-center font-mono text-6xl font-bold p-8'>Currency Converter</h1>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  convert()
                }} className='flex flex-col items-center justify-evenly bg-gray-400 h-4/5 w-4/5 rounded-3xl'>
                    <InputBox label="From" amount={amount} currencyOptions={options} onCurrencyChange={() => setAmount(amount)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
                    <button className='bg-blue-500 p-4 text-xl font-bold rounded-3xl' onClick={swap}>swap</button>
                    <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisable />
                    <button className='bg-blue-500 p-4 text-xl font-bold rounded-3xl'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                </form>
        </div>
    )
}

export default App
