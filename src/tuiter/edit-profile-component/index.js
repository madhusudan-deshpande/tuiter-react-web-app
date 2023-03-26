import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { updateInfo } from "../profile-component/profile-reducer";
import monthMap from "../profile-component/months";
import { Link } from "react-router-dom";

const EditProfileComponent = () => {
    const info = useSelector(state => state.profile[0])
    const dispatch = useDispatch()
    let [CurrInfo, setCurrInfo] = useState(info)
    const onChangeNameHandler = (event) => {
        const nameValue = event.target.value;
        const newName = {
            ...CurrInfo,
            "fullname": nameValue
        };
        setCurrInfo(newName)
    };
    const onChangeBioHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            ...CurrInfo,
            "bio": bioValue
        };
        setCurrInfo(newBio)
    };
    const onChangeLocationHandler = (event) => {
        const locationValue = event.target.value
        const newLocation = {
            ...CurrInfo,
            "location":locationValue
        }
        setCurrInfo(newLocation)
    };
    const onChangeWebsiteHandler = (event) => {
        const websiteValue = event.target.value
        const newWebsite = {
            ...CurrInfo,
            "website":websiteValue
        }
        setCurrInfo(newWebsite)
    };
    const dobEditingModeChange = () => {
        const newDobEditingMode = {
            ...CurrInfo,
            "dobEditingMode": !CurrInfo.dobEditingMode
        }
        setCurrInfo(newDobEditingMode)
    };
    const onChangeDobHandler = (event) => {
        const dobValue = event.target.value
        const dobText =  monthMap[parseInt(dobValue.substring(5,7))] + ' ' + dobValue.slice(8,10) + ' ' + dobValue.slice(0,4)
        const newDob = {
            ...CurrInfo,
            "dateOfBirth": dobValue,
            "dateOfBirthText": dobText
        }
        setCurrInfo(newDob)
    };
    const onClickSaveHandler = () => {
        const newProfile = CurrInfo
        dispatch(updateInfo(newProfile))
    }
    return(
        <div>
            <div className="row">
                <div className="col-2">
                    <Link to="/tuiter/profile" className="wd-hyperlink-no-underline">
                        <i className="bi bi-x-lg mt-2 float-start"></i>
                    </Link>
                </div>

                <div className="col-9">
                    <h2>Edit Profile</h2>
                </div>

                
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-dark rounded-pill float-end"
                        onClick={onClickSaveHandler}>
                        Save
                        </button>
                    </Link>
                </div>

            </div>

            <div className="position-relative">
                <img className="w-100 opacity-50" src = {CurrInfo.bannerPicture}/>
                {/* <div className="bg-secondary position-absolute bottom-0 h-100 w-100 opacity-50"></div> */}
                <img className="rounded-circle w-25 position-absolute wd-profile-avatar wd-gray-image opacity-75" src = {CurrInfo.profilePicture}/>
            </div>
            
            <br/>

            <div className="mt-5 position-relative">
                <label className="position-absolute wd-input-label-margins text-secondary">Name</label>
                <input className="form-control wd-form-control-height-60px" defaultValue={CurrInfo.fullname}
                onChange = {onChangeNameHandler}/>
            </div>

            <div className="mt-2 position-relative">
                <label className="position-absolute wd-input-label-margins text-secondary">Bio</label>
                <textarea className="form-control pt-4" defaultValue={CurrInfo.bio} rows="3"
                onChange={onChangeBioHandler}></textarea>
            </div>

            <div className="mt-2 position-relative">
                <label className="position-absolute wd-input-label-margins text-secondary">Location</label>
                <input className="form-control wd-form-control-height-60px"
                onChange={onChangeLocationHandler} defaultValue={CurrInfo.location}/>
            </div>

            <div className="mt-2 position-relative">
                <input className="form-control wd-form-control-height-60px"
                onChange={onChangeWebsiteHandler} placeholder="Website"/>
            </div>

            {CurrInfo.dobEditingMode === true ? 
            <><label className="mt-4 text-secondary">Birthdate &middot; <span onClick={dobEditingModeChange} className="text-primary">Done</span></label><br /><input type="date" onChange={onChangeDobHandler} defaultValue={CurrInfo.dateOfBirth}/></>
            : 
            <><label className="mt-4 text-secondary">Birthdate &middot; <span onClick={dobEditingModeChange} className="text-primary">Edit</span></label><br /><span>{CurrInfo.dateOfBirthText}</span></>
            }

            <div className="mt-4">
                <span className="fs-5">Switch to professional</span>
                <div className="float-end">
                <i className="fa-solid fa-greater-than float-end mt-1"></i>
                </div>
            </div>

            
        </div>
    )
};
export default EditProfileComponent;