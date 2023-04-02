import React from "react";
import TuitStats from "./tuit-stats";
import "../index.css";
import {useDispatch} from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (
{
    tuit = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "../../images/spacex.jpeg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }      
    return(
        <div className="list-group-item p-0">

            <div className="row">

                <div className="col-2">
                    <img src={`${tuit.image}`} className="wd-img rounded-circle ms-2 mt-2"/>
                </div>

                <div className="col-10 pe-4 pt-1">
                
                    <span className="fw-bold">{tuit.userName} </span>
                    <span className="text-primary"><i className="fa fa-circle-check"></i></span>
                    <span className="text-secondary"> {tuit.handle} &middot; {tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <br/>
                    <span>{tuit.tuit}</span>

                    <TuitStats tuit={tuit}/>
                
                </div>

            </div>
        </div>
    )
};

export default TuitItem;
