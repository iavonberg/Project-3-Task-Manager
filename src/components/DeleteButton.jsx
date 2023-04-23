import React from "react";
import { useDispatch } from "react-redux";

const DeleteTask = props => {
    let style = {
        marginLeft: 50,
    }
    const dispatch = useDispatch();
    return (
        <button style={style} onClick={() => dispatch({type: "DELETE_TASK", id: props.id})}>Delete</button>
    )
}

export default DeleteTask;