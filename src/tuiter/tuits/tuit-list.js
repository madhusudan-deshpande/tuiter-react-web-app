import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitItemList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])  
    return(
        <div className="list-group p-0">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(
                    item => <TuitItem key={item._id} tuit = {item} />
                )
            }
        </div>
    );
};
export default TuitItemList;