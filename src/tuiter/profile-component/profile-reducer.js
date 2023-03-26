import { createSlice } from "@reduxjs/toolkit";

const profileInfo = [
    {
    "fullname": "Madhusudan Deshpande",
    "handle": "@madhu",
    "profilePicture": "../../images/yin_yang_avatar.png", 	
    "bannerPicture": "../../images/gears.webp",
    "bio": "Data Science Grad Student at Northeastern University. Likes to play Soccer, Chess and surf on Tuiter!",
    "website": "github.com/madhusudan-deshpande",
    "location": "Boston, MA",	
    "dateOfBirth": "1995-06-01",
    "dateOfBirthText": "June 01 1995",
    "dobEditingMode": false,
    "dateJoined": "January 2023",
    "followingCount": 340,	
    "followersCount": 223,
    "tuits": 5000
    }
];


const profileSlice = createSlice(
    {
        name: "profile",
        initialState: profileInfo,
        reducers: {
            updateInfo(state, action){
                state.unshift({
                    ...action.payload
                })
                state.splice(1,1)
            }
        }
    }
);

export default profileSlice.reducer;
export const {updateInfo} = profileSlice.actions;