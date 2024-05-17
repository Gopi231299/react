import React from "react";
import ReactDom from "react-dom/client";
import { Header }  from "./components/Header";


const First = () =>{
    return (
        <div>
            <Header/>
            <h1>Hello from Js</h1>
        </div>
    );
};



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<First/>);
