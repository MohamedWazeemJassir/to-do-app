import React from "react";
import { useState } from "react";

function AddTask(props){
    const [inputText, setInputText] = useState("");

    function handleChange(e){
        const newValue = e.target.value;
        setInputText(newValue);
    }

    function handleClick(){
        setInputText(inputText);
        console.log(inputText);
    }
    
    return(
        <div className="add-task">
            <input type="text" name="" id="task-input" onChange={handleChange} />
            <input type="button" value="Add" className="add-btn" 
                onClick={() => {props.onAdd(inputText);setInputText("");}} 
            />
        </div>
    )
}

export default AddTask;