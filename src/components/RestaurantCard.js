// import { CDN_URL } from '../utils/constants';
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';

// const RestaurantCard = (props) => {
//   const { resData } = props;

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     deliveryTime,
//   } = resData?.info;

//   return (
//     <div className="res-card">
//       <div className="res-img">
//         <img
//           className="res-logo"
//           src={CDN_URL + cloudinaryImageId}
//           alt="Biryani"
//         />
//       </div>

//       <div className="res-card-content">
//         <h3>{name}</h3>
//         <hr />
//         <em>{cuisines.join(', ')}</em>
//         <h4 className="avg-rating">
//           <span className="icons">
//             <AiOutlineStar />
//           </span>
//           <span>{avgRating} stars</span>
//         </h4>
//         <h4 className="item-price">₹ {costForTwo / 100} FOR TWO</h4>
//         <h4 className="time">
//           <span className="icons">
//             <FiClock />
//           </span>
//           <span> {deliveryTime} minutes</span>
//         </h4>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;







// import {CDN_URL} from "../utils/constants";  //corrected path
//   //named import

// const RestaurantCard=(props) => {     //instead of creating this RestaurantCard multiple times,create props(objectS) and use it as many times   
//     const {resData}= props;

//     const{cloudinaryImageId,
//         name,
//         cuisines,
//         avgRating,
//         costForTwo,
//         deliveryTime,
//     } =resData?.info;
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo"
//             alt="res-logo"
//             src={
//               CDN_URL+resData.info.cloudinaryImageId
//             }
//                 />
//             <h3>{name}</h3>  
//             <h4>{cuisines.join(",")}</h4> 
//             <h4>{avgRating}</h4>
//             <h4>{costForTwo}</h4>
//             <h4>{deliveryTime}</h4>
//         </div>
//     )
// };
// export default RestaurantCard;
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-info">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="res-details">
          <div className="res-rating">★ {avgRating}</div>
          <h4>₹{costForTwo} for two</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

