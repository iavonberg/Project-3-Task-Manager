import React from "react";
import { useDispatch } from "react-redux";

const SetView = props => {
    const dispatch = useDispatch();
    return (
            <li>
                <a className="view" onClick = { () => dispatch({type: 'SHOW_VIEW', completed: props.completed})}>{props.view}</a></li>
    )
}
export default SetView;