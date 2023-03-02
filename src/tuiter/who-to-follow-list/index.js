import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item"

const WhoToFollowList = () => {
    return (
        <div className="list-group">
            <div className="list-group-item">
                <span className="fw-bold">Who to follow</span>
            </div>

            {
                who.map(item => <WhoToFollowListItem key={item._id} who={item}/>)
            }

        </div>
    );
};
export default WhoToFollowList;