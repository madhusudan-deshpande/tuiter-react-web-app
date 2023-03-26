import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

const ProfileComponent = () => {
    const info =  useSelector(state => state.profile[0])
    return(
        <div>
            <div className="row">
                <div className="col-auto">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="col-auto">
                    <span className="fs-3 fw-bold">{info.fullname}</span><br/>
                    <span className="text-secondary">{info.tuits} Tweets</span>
                </div>
            </div>
            
            <div className="position-relative">
                <img className="w-100" src = {info.bannerPicture}/>
                <img className="rounded-circle w-25 position-absolute wd-profile-avatar" src = {info.profilePicture}/>
            </div>

            <Link to="/tuiter/edit-profile" className="wd-hyperlink-no-underline">
                <div className="mt-2 mb-3 d-flex justify-content-end">
                    <button className="btn btn-default w-25 border border-secondary rounded-pill">
                        Edit Profile
                    </button>
                </div>
            </Link>

            <div className="mb-3">
                <span className="fs-4 fw-bold">{info.fullname}</span><br/>
                <span className="text-secondary">{info.handle}</span>
            </div>

            <div>
                <span>
                    {info.bio}
                </span>

                <br/><br/>

                <i className="bi bi-geo-alt-fill mt-2 me-1"></i><span className="text-secondary">{info.location}</span>
                <i className="bi bi-balloon mt-2 me-1 ms-4"></i><span className="text-secondary">Born {info.dateOfBirthText}</span>
                <i className="bi bi-calendar mt-2 me-1 ms-4"></i><span className="text-secondary">Joined {info.dateJoined}</span>
                
                <br/><br/>

                <span className="fw-bold">{info.followingCount}</span> <span className="text-secondary me-3">Following</span>
                <span className="fw-bold">{info.followersCount}</span> <span className="text-secondary">Followers</span>

            </div>
            
        </div>
    )
};

export default ProfileComponent;