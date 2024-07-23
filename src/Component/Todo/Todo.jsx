import React, { useState } from 'react'
import './Todo.css'
import logo from '../../assets/img/logo.png'
import { AiFillDelete } from "react-icons/ai";

const Todo = () => {
 
  const [initial, setInitial ] = useState();

  const [data, setData ] = useState([]);

const getInput = (event) =>{
console.log(event.target.value);
setInitial(event.target.value);
}

const getData = () =>{
  console.log(initial);
  let store = [...data, initial]
  setData(store);
  setInitial("");
}

const deleteTask = (index) =>{
console.log(index);
let filterData = data.filter((curElem , id)=>{
  return id != index
})
setData(filterData)
}

const removeall = () =>{
  setData([]);
}

  return (

    <>
    <div className="container">
    <div className="main_div">
        <div className="child_div">
<figure>
    <img src={logo} alt="todologo" style={{height:"50px", marginTop:"70px"}} />
    <figcaption style={{color:"#fff", fontSize:"25px"}}>Add Your List Here</figcaption>
</figure> <br />
<div className="taskInput">
    <input type="text"placeholder='✍️ Add Items...'  value={initial} onChange={getInput}/>
    <button onClick={getData} >+</button>
</div> <br /><br />
{data.map((curVal , index)=>{
  return (
    <>
    <div className='taskdata'>
      
      <p>{curVal}</p>
      <AiFillDelete id='deleteicon' onClick={()=>deleteTask(index)}/>
    </div>
    </>
  )
})}

<br />
{/* 
Clear all button */}

<div className="Removeall">
  <button className='' onClick={removeall}  ><span>Remove All</span></button>
</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Todo