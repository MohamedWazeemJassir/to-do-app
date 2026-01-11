import { useState } from "react";

function List(props){
    const [checked, setChecked] =  useState(false);

    function checkHandler(){
        setChecked(!checked);
    }
    return(
        <div className="list">
            <input type="checkbox" 
                onChange={checkHandler}
                onClick={() => setChecked((prev) => !prev)}
                checked={checked} 
            ></input>
            <label 
                style={{
                    textDecoration: checked ? "line-through" : "none"
                }}
                onClick={() =>
                    setChecked((prev) => !prev)
                } 
            >{props.task}</label>
        </div>
    )
}

export default List;