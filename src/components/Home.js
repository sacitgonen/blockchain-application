import axios from "axios/index";
import React from "react";
import {NavLink} from "react-router-dom";

function handleClick() {
    axios.get("/hello")
        .then((result) => console.log(result))
        .catch((err) => console.error(err));
}

function Home() {
    return <>
        <button onClick={handleClick}>axios</button>
        <NavLink to="blockchain">Go to Blockchain</NavLink>
    </>
}

export default Home;

// localStorage.setItem("username", value);
// const username = localStorage.getItem("username");