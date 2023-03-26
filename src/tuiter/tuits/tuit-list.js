import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitItemList = () => {
    const tuitArray = useSelector((state) => state.tuits)
    return(
        <div className="list-group p-0">
            {
                tuitArray.map(
                    item => <TuitItem key={item._id} tuit = {item} />
                )
            }
        </div>
    );
};
export default TuitItemList;