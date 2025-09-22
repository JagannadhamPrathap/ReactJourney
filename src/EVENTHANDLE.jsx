import {useState} from 'react'

function Eventhandle(){
    const [name,setName] = useState('Guest')
    const [age,setAge] = useState(0)
    const nameChange=(event)=>{
        setName(event.target.value)
    }
    const myFunc = (x)=>{
        const y = x.target.value
        if (y>=1 && y<=50){
            setAge(y)
        }
    }
    return (
        <div>
            <input value={name} onChange={nameChange} type='text'></input>
            <p>Name:{name}</p>
            <input onChange={myFunc} type='number' value={age} min={1} max={50}></input>
            <p>Age:{age}</p>
        </div>
    )
}
export default Eventhandle