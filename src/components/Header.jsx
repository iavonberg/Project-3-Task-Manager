import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDo from "../routes/toDo";
import ErrorPage from "./Error-Page.jsx"
import Contact from "../routes/contact"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ToDo />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/todo",
        element: <ToDo />
    }
]);

const Header = props => {
    var style = {
        width: 960,
        height: 75,
        backgroundColor: "black",
        color: "white",
    };

    var listStyle = {
        display: "inline-flex",
        listStyle: "none inside",
        marginTop: 50
    }

    var listItemStyle = {
        marginRight: 10,
    }
    return (
        <nav style={style}>
            <ul style={listStyle}>
                <li style={listItemStyle}><a href={`/`}>To Do</a></li>
                <li style={listItemStyle}><a href={`/contact`}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;