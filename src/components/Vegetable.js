import { useState,useEffect } from "react";
import React from "react";


const Vegetable =() =>{
    
    const [vegList,setVegList]=useState(null);
    const[filteredVeglist,setfilteredVegList]=useState(null);

    useEffect=(()=>{
        fetchData();
    },[]);

    const fetchData= async () =>{
        const data= await fetch(
            "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
        );

        const json=await data.json();
        const vegetables=json?.data?.widgets[2]?.data || [];
        setVegList(vegetables);
    }
    return(
       <div className="veg-body">
            <div>
                
            </div>
       </div> 
    )
}