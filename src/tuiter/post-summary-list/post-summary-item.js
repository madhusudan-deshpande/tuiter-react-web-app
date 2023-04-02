import React from "react";
import "./index.css"
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "avatarIcon": "../../images/tesla.png"
        }
    }
) => {
    return (
        <div className="list-group-item p-1">
            <div className="row">
                <div className="col-9">
                    <div className={post.topic === "" ? "d-none" : ""}>
                        <span className="text-secondary">{post.userName} </span>
                        <span className="text-primary"><i className="fa-solid fa-circle-check"></i></span>
                        <span className="text-secondary"> &middot; {post.time}</span>
                    </div>
                    <span className="fw-bolder">{post.topic} </span>
                    <br/>
                    <span>{post.title}</span>
                </div>

                <div className="col-3 text-center mt-auto mb-auto">
                    <img width={70} src={`${post.avatarIcon}`} className="wd-img"/>
                </div>
            </div>
        </div>
    );
};
export default PostSummaryItem;