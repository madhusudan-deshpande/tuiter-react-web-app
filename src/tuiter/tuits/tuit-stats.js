import React from "react";
import "../index.css"

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "avatarIcon": "../../images/spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <div className="row mt-2 mb-2">
            <div className="col-3">
                <a href="#" className="text-secondary wd-hyperlink-no-underline">
                    <i className="fa fa-comment me-1"></i>
                    <span>{tuit.replies}</span>
                </a>
            </div>

            <div className="col-3">
                <a href="#" className="text-secondary wd-hyperlink-no-underline">
                    <i className="fa fa-retweet me-1"></i>
                    <span>{tuit.retuits}</span>
                </a>
            </div>

            <div className="col-3">
                <a href="#" className="text-secondary wd-hyperlink-no-underline">
                    {
                        tuit.liked === true ? <i className="fa-solid fa-heart me-1 text-danger"></i> 
                        : <i className="fa-solid fa-heart me-1"></i>
                    }
                    <span>{tuit.likes}</span>
                </a>
            </div>

            <div className="col-3">
                <a href="#" className="text-secondary wd-hyperlink-no-underline">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </a>
            </div>
        </div>
    )
};

export default TuitStats;

