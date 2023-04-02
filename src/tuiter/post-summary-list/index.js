import React from "react";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData)
    console.log(tuits)
    return(
        <div className="list-group mb-2 p-0">
            {
                tuits.map(post => <PostSummaryItem key = {post._id} post={post}/>)
            }
        </div>
    );
};
export default PostSummaryList;