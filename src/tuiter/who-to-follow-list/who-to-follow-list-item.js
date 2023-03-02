import React from "react";
import "./index.css";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.webp'}
    }
) => {
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-3 mt-auto mb-auto p-0">
                    <img className="wd-img rounded-circle" src={`../../images/${who.avatarIcon}`}/>
                </div>
                <div className="col-6 mt-auto mb-auto p-0">
                    <span className="fw-bold">{who.userName} </span>
                    <span className="text-primary"><i className="fa-solid fa-circle-check"></i></span><br/>
                    <span className="text-secondary">@{who.handle}</span>
                </div>
                <div className="col-3 mt-auto mb-auto p-0">
                    <div className="d-grid mt-auto mb-auto">
                        <a href="#" className="btn btn-primary btn-block rounded-pill me-2 ps-lg-2 pe-lg-2"
                           type="button">Follow</a>
                    </div>
                </div>
            </div>
        </div>
);
};
export default WhoToFollowListItem;
