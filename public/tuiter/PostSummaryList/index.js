import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

function PostSummaryList(){
    return (`
        <div class="list-group mb-2">
        ${posts.map(item => {return PostSummaryItem(item)}).join("")}
        </div>
    `)
};
export default PostSummaryList;

//To Test

$("#wd-post-item-summary").append(
    `
    ${PostSummaryList()}
    `
)
