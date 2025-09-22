import { useState } from "react";

function UpdateList(){
    const [tech,setTech] = useState(["C","Python","Java","JavaScript"])
    function myFunc(){
        const x = document.getElementById('Input').value
        document.getElementById('Input').value = ''
        setTech(t=>[...t,x])
    }
    function DropEle(i){
        setTech(tech.filter((x,y)=> y!==i))
    }
    return (
        <div>
            <ul>
                {tech.map((elem,index)=><li onClick={()=>DropEle(index)}>{elem}</li>)}
            </ul>
            <input type="text" placeholder="Enter tech" id='Input'></input>
            <button onClick={myFunc}>Add</button>
        </div>
    )
}
export default UpdateList