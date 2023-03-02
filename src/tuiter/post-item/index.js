import React from "react";
import PostItem from "./post-Item";
import posts from "./posts.json";

const PostItemList = () => {
    return(
        <div className="list-group p-0">
            {
                posts.map(
                    post => <PostItem key={post._id} post={post}/>
                )
            }
        </div>
    );
};
export default PostItemList;