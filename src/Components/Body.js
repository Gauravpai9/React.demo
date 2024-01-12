import Restaurantcard from "./Restaurantcard";
import resObj from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
    const [restList,setList] = useState(resObj);
    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filterList = restList.filter(
                    (res) => res.info.avgRating > 4
                );
                setList(filterList)
            }}>
                Top rated restaurant</button> 
        </div>
        <div className="Resto-container">
            {
                restList.map((restaurant) => (
                    <Restaurantcard key = {restaurant.info.id} resData = {restaurant}/>
                )
                )
            }
            
        </div>
    </div>
    );
};

export default Body;