import React from "react";
import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";

const PostSummaryList = () => {
    return(
        <div className="list-group mb-2 p-0">
            {
                posts.map(post =>
                    <PostSummaryItem key = {post._id} post={post}/>
                )
            }
        </div>
    );
};
export default PostSummaryList;