import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "../../images/nasa.jpeg",
};
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })      
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
          },
        likeUnlike(state, action) {
            const updatedTuitLikes = state.find(tuit => tuit._id === action.payload._id)
            action.payload.liked === true ? updatedTuitLikes.likes -= 1 : updatedTuitLikes.likes += 1;
            updatedTuitLikes.liked = !updatedTuitLikes.liked
        }
        }     
});

export const {createTuit, deleteTuit, likeUnlike} = tuitsSlice.actions;
export default tuitsSlice.reducer;