import PostItem from "./PostItem.js";
import posts from "./posts.js";

function PostItemList(){
    return(`
    <div class="list-group">
        ${posts.map(item => {return PostItem(item)}).join("")}
    </div>
    `)
};

export default PostItemList;