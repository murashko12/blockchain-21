import { useState } from "react"

const Rates = () => {
    const [counter, setCounter] = useState(10)
    const handleIncrement = () => setCounter(counter + 1)
    const handleDecrement = () => counter > 1 && setCounter(counter - 1)
    return (
        <div className="absolute w-[400px] h-2/6 top-5 left-5 rounded-xl bg-gray-400 z-10 flex flex-col gap-5">
            <p>На счету: {123} р</p>
            <p>Начальная ставка: {counter} р</p>
            <div className="flex gap-3 w-full justify-center">
                <button onClick={handleIncrement} className="w-10 h-10 bg-red-500 cursor-pointer">+</button>
                <button onClick={handleDecrement} className="w-10 h-10 bg-red-500 cursor-pointer">-</button>
                <button className="w-30 bg-red-500">ПРИНЯТЬ</button>
            </div>
            <div className="flex gap-3 w-full justify-center">
                <button className="w-30 h-10 bg-red-500 cursor-pointer">SPLIT</button>
                <button className="w-30 h-10 bg-red-500 cursor-pointer">Double down</button>
            </div>
        </div>
    )
}

export default Rates
