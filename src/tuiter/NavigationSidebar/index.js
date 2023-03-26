import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();

    let active = "";
    switch(pathname) {
        case "/tuiter/home":
        case "/tuiter":
        case "/tuiter/":
            active = "home";
            break;
        case "/tuiter/explore":
            active = "explore";
            break;
        case "/tuiter/profile":
            active = "profile";  
    }

    return (
        <div>

            <div className="list-group">

                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa-brands fa-twitter"></i>
                </a>

                <Link to="/tuiter/home"
                   className={`list-group-item list-group-item-action ${active === "home" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-house"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Home</span>
                        </div>
                    </div>
                </Link>

                <Link to="/tuiter/explore"
                   className={`list-group-item list-group-item-action ${active === "explore" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-hashtag"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Explore</span>
                        </div>
                    </div>
                </Link>

                <a href="#"
                   className={`list-group-item list-group-item-action ${active === "notifications" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Notifications</span>
                        </div>
                    </div>
                </a>

                <a href="#"
                   className={`list-group-item list-group-item-action ${active === "messages" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Messages</span>
                        </div>
                    </div>
                </a>

                <a href="#"
                   className={`list-group-item list-group-item-action ${active === "bookmarks" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Bookmarks</span>
                        </div>
                    </div>
                </a>

                <a href="#"
                   className={`list-group-item list-group-item-action ${active === "lists" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Lists</span>
                        </div>
                    </div>
                </a>

                <Link to="/tuiter/profile"
                   className={`list-group-item list-group-item-action ${active === "profile" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>Profile</span>
                        </div>
                    </div>
                </Link>

                <a href="#"
                   className={`list-group-item list-group-item-action ${active === "more" ? "active" : ""}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-circle-minus"></i>
                        </div>
                        <div className="col-10 d-none d-xl-inline">
                            <span>More</span>
                        </div>
                    </div>
                </a>

            </div>

            <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary btn-block rounded-pill ps-md-1 pe-md-1">Tuit</a>
            </div>

        </div>
    );
};
export default NavigationSidebar;