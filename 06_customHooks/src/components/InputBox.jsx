import { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) => {
    const amountInputId = useId()

    return (
        <div className="flex items-center justify-center bg-black h-1/3 w-11/12 rounded-3xl text-white">
            <div className="flex flex-row  items-center justify-evenly h-4/5 w-11/12 bg-white rounded-3xl">
                <div className="flex flex-col w-3/4 text-black">
                    <label htmlFor={amountInputId} className="pb-4 text-xl text-neutral-500">{label}</label>
                    <input id={amountInputId} className="bg-neutral-200 text-xl p-4 rounded-3xl" type="number" disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                </div>
                <div className="flex flex-col items-end w-1/6 text-black">
                    <label className="block text-end pb-4 text-xl text-neutral-500">Currency Type</label>
                    <select className="w-24 bg-neutral-200 text-xl p-4 rounded-3xl" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default InputBox