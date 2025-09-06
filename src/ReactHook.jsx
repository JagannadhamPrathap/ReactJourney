import React,{useState} from "react";
import styled from "styled-components";
function ReactHook(){
    const Box = styled.div`
    border: 2px solid orange;
    padding: 20px;
    margin: 10px;
    background: #fff3e0;
    width:350px
    `;
    const MyButton = styled.button`
    background: #4caf50;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin: 5px;

    &:hover {
        background: #45a049;
    }
    `;


    const [name,setName] = useState("Guest")
    const [age,setAge] = useState(0)
    const updateName = () => {
        return (
            setName("Prathap")
        );
    }
    const incrementAge = () => {
        return (
            setAge(age+1)
        );
    }
    const [isEmp,setEmp] = useState(false)
    const toggleEmp = () => {
        return (
            setEmp(!isEmp)
        );
    }
    return (
        <Box>
            <p>Name:{name}</p>
            <MyButton onClick={updateName}>set Name</MyButton>
            <p>Age:{age}</p>
            <MyButton onClick={incrementAge}>Increment Age</MyButton>
            <p>IsEmp:{isEmp?"Yes":'No'}</p>
            <MyButton onClick={toggleEmp}>Emp Status</MyButton>
        </Box>
    );
}
export default ReactHook;