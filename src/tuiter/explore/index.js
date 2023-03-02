import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list";
const ExploreComponent = () => {
    return(
        <div>
            <div class="row ms-0 me-0">
                <div className="col-11 position-relative p-0">
                    <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5 mb-2"/>
                    <i className="fa fa-search position-absolute wd-nudge-up"></i>
                </div>
                <div className="col-1 text-end mt-auto mb-auto pb-2">
                    <a href="#"><i className="fa-solid fa-gear fa-2x text-primary"></i></a>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 border-0">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="#" tabIndex="-1">Entertainment</a>
                </li>
            </ul>

            <div className="list-group-item p-0 mb-2">
                <img src="../../images/spacex_starship.webp" className = "w-100"/>
                <div className="position-absolute bottom-0 text-white fs-2 fw-bold ms-2">SpaceX's Starship</div>
            </div>

            <PostSummaryList/>

        </div>
    );
};
export default ExploreComponent;
