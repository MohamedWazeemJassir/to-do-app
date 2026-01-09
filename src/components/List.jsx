import React from "react";

function List(props){
    return(
        <div className="list">
            <input type="checkbox"></input>
            <label> {props.task}</label>
        </div>
    )
}

export default List;