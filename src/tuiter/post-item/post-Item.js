import React from "react";
import "./index.css"

const PostItem = (
    {
        post = {
            "avatarIcon": "../../images/elonAvatar.jpeg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "image": "../../images/elonTuit.jpeg",
            "link": "netflix.com",
            "tuitLink": "",
            "linkHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "linkDetails": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "likes": "37.5K",
            "comments": "4.2K",
            "reTuits": "3.5K",
            "retweeted_user": "Elon Must Retweeted",
            "show_thread": "Y"
        }
    }
) => {
    return(

        <div className="list-group-item p-0 mb-2">
            <div className="row">

                <span className={`ms-5 mt-2 text-secondary ${post.retweeted_user === "" ? " d-none" : ""}`}>
                    <i className="fa fa-retweet"></i>
                    {post.retweeted_user}
                </span>

                <div className="col-2">
                    <img src={`${post.avatarIcon}`} className="wd-img rounded-circle ms-2 mt-2"/>
                </div>

                <div className="col-10">

                    <div className="pe-4">
                        <span className="fw-bold">{post.userName} </span>
                        <span className="text-primary"><i className="fa fa-circle-check"></i></span>
                        <span className="text-secondary"> @{post.handle} &middot; {post.time}</span>
                        <span className="float-end me-2">&middot; &middot; &middot;</span>
                        <br/>
                        <span>{post.tuit} {post.tuitLink === "" ? "" :
                            <a className="wd-hyperlink-no-underline" href = {post.tuitLink}>{post.tuitLink}</a>}
                        </span>
                    </div>

                    <div className="list-group wd-border-radius-10px pe-4">
                        <div className={`list-group-item p-0 ${post.linkHeading === "" ? " border-0" : ""}`} >
                            <img src={`${post.image}`} className={`w-100  ${post.linkHeading === "" ? " wd-border-radius-10px" : "wd-rounded-corners-top-10px"}`}/>
                        </div>
                        <div className={`list-group-item ${post.linkHeading === "" ? " d-none" : ""}`}>
                            <span className="fw-bold">{post.linkHeading}</span>
                            <br/>
                            <span>{post.linkDetails}</span>
                            <br/>
                            <a href={`${post.link}`} className="wd-hyperlink-no-underline text-secondary"><i
                                className="fa-solid fa-link text-secondary"></i>{post.link}</a>
                        </div>
                    </div>

                    <div className="row mt-2 mb-2">
                        <div className="col-3">
                            <a href="#" className="text-secondary wd-hyperlink-no-underline">
                                <i className="fa fa-comment"></i>
                                <span>{post.comments}</span>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="#" className="text-secondary wd-hyperlink-no-underline">
                                <i className="fa fa-retweet"></i>
                                <span>{post.reTuits}</span>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="#" className="text-secondary wd-hyperlink-no-underline">
                                <i className="fa-solid fa-heart"></i>
                                <span>{post.likes}</span>
                            </a>
                        </div>

                        <div className="col-3">
                            <a href="#" className="text-secondary wd-hyperlink-no-underline">
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </a>
                        </div>
                    </div>

                    <span className={`d-block mt-2 mb-2 text-primary ${post.show_thread === "N" ? " d-none" : ""}`}>Show this thread</span>

                </div>

            </div>

        </div>
    );
};
export default PostItem;
