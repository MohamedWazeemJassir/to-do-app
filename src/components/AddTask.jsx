import { useState } from "react";

function AddTask(props){
    const [inputText, setInputText] = useState("");

    function handleChange(e){
        const newValue = e.target.value;
        setInputText(newValue);
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