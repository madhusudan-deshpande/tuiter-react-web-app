import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

function WhoToFollowList(){
    return `
        <div class="list-group">
            <div class="list-group-item">
                <span class="fw-bold">Who to follow</span>
            </div>
            
            ${
                who.map(
                item => {
                    return WhoToFollowListItem(item)
                }).join("")
            }
            
        </div>
    `
}
export default WhoToFollowList;

//To Test Side Bar

$('#wd-who-to-follow-bar').append(
    $(WhoToFollowList())
)