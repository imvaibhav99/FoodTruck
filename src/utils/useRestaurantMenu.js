//we are creating our own custom hook to fetch the restaurant menu data and import it in RestaurantMenu.js 
//it makes our code look cleaner and easier for debugging  and it makes our code testable


import {useEffect , useState} from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) =>{   //custom Hook useRestaurantMenu.js
    const [resInfo, setResInfo]= useState(null);

useEffect(()=>{    //call the useEffect hook inside the custom hook
    fetchData();
},[]);
const fetchData= async () =>{
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
};
return resInfo;


}
export default useRestaurantMenu;
