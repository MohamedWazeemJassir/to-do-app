import React from "react";

function List(props){
    return(
        <>
            <input type="checkbox"></input>
            <label> {props.task}</label>
        </>
    )
}

export default List;