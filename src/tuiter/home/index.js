import React from "react";
import TuitItemList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";
import "./index.css"


const HomeComponent = () => {
    return(
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitItemList/>
        </div>
    )
};
export default HomeComponent;