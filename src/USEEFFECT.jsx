import { useState,useEffect } from "react";

function UseEffect(){
    const [count,setCount] = useState(0)
    const [color,setColor] = useState('Blue')
    useEffect(()=>{
        document.title = `Count:${count} color:${color}`
    },[color])
    const increment = () => {
        setCount(c => c+1)
    }
    const changeColor = () => {
        setColor(x=> x === 'Blue' ? 'Green' : 'Red')
    }
    return (
        <div>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default UseEffect