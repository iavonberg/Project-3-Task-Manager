import React from "react";

const ViewSwitcher = props => {

let style = {
    display: "inline-flex",
    listStyle: "none inside",
    marginBottom: 0,
    marginLeft: 575,

}

    return (
        <div>
            <ul style={style}>
                <li>All/</li>
                <li>Completed/</li>
                <li>Incomplete</li>
            </ul>
        </div>
    )
}

export default ViewSwitcher;