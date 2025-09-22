import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0)
    const Increment = () => setCount(count+1)
    const Decrement = () => setCount(count-1)
    const Reset = () => setCount(0)
    const buttoncase = "px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <p className="text-4xl font-bold mb-6">{count}</p>
            <div className="flex gap-4">
                <button onClick={Increment} className={buttoncase}>+</button>
                <button onClick={Reset} className={buttoncase}>Reset</button>
                <button onClick={Decrement} className={buttoncase}Reset>-</button>
            </div>
        </div>
    )
}
export default Counter