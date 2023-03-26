import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item"
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return (
        <div className="list-group">
            <div className="list-group-item">
                <span className="fw-bold">Who to follow</span>
            </div>

            {
                whoArray.map(item => <WhoToFollowListItem key={item._id} who={item}/>)
            }

        </div>
    );
};
export default WhoToFollowList;