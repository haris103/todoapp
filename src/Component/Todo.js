import React from 'react';
import img from '../Images/1.png';
import './css/stylee.css';
import { useState } from 'react';
const Todo = () =>{
    const [inputData, setInputData] = useState('');
    const [items, setitems] = useState([]);
    const [toggleSubmit,setToggleSbmit] = useState(true); 
    const[isEditItems,setIsEditItems] = useState(null);

    const addItem= ()=>{
        if(!inputData){
alert("Enter Something To Show");
        }
        else if(inputData && !toggleSubmit){
setitems(
    items.map((datta)=>{
if(datta.id === isEditItems){
    return{... datta, name:inputData}
}
return datta;
    })
)
setToggleSbmit(true);
setInputData([]);
setIsEditItems(null);

        }
        else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData }
            setitems([...items,allInputData]);
            setInputData("");
        }       
    }
const deleteItem = (indeex) =>{
const updatedItems = items.filter((datta)=>{
return indeex !== datta.id;
})
setitems(updatedItems);
}
const removeAll = ()=>{
    setitems([]);
    setInputData([]);

}
const editItem= (id)=>{
const newEditItem = items.find((datta)=>{
return id === datta.id;
})

setToggleSbmit(false);
setInputData(newEditItem.name);
setIsEditItems(id);
}
    return(
        <>
<div className="main-div">
    <div className="child-div">
<figure>
    <img src={img} alt="Nothing is Here" />
    <figcaption>Add Your List Here  👍</figcaption>
</figure>
<div className="addItems">
<input 
type="text" 
placeholder="✍️ Add Items ... "
onChange={(eventt)=> setInputData(eventt.target.value)}
value={inputData}
/>
{
    toggleSubmit ? <i className="fas fa-plus add-btn" title="Add Btton" onClick={addItem}></i> : 
    <i className="fas fa-edit add-btn" title="Update Btton" onClick={addItem}></i>
}


</div>
<div className="deleteItems">
{
    items.map((datta)=>{
        return(
        <div className="eachItem" key={datta.id}>
            <h1>{datta.name}</h1>
            <i className="fas fa-edit edit-btn" title="Edit Btton" onClick={()=> editItem(datta.id)}></i>
            <i className="fas fa-trash-alt delete-btn" title="Delete Btton" onClick={()=> deleteItem(datta.id)}></i>
        </div>
        )
    })
}
</div>
    <button className="btnn" onClick={removeAll}>CHECKLIST</button>
    </div>
</div>
        </>

    )
}
export default Todo;