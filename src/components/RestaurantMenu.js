
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ShimmerMenu from './ShimmerMenu';
// import { CDN_URL } from '../utils/constants';
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';
// import useRestaurantMenu from '../utils/useRestaurantMenu';
// import { useCart } from '../context/CartContext'; // Import Cart Context

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const { addToCart } = useCart(); // Use Cart Context

//   useEffect(() => {
//     if (resId) {
//       fetchMenu();
//     }
//   }, [resId]);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.141290748112464&lng=75.84227051585913&restaurantId=${resId}`
//       );
//       const json = await response.json();
//       setResInfo(json?.data);
//     } catch (error) {
//       console.error('Error fetching the menu:', error);
//     }
//   };

//   if (resInfo === null) return <ShimmerMenu />;

//   const {
//     name,
//     cuisines,
//     costForTwoMessage,
//     cloudinaryImageId,
//     avgRating,
//     deliveryTime,
//   } = resInfo?.cards?.[0]?.card?.card?.info || {};

//   const itemCards =
//     resInfo?.cards?.find(card => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
//       card => card.card?.card?.itemCards
//     )?.card?.card?.itemCards || [];

//   return (
//     <div className="menu">
//       <header className="menu-header">
//         <div className="menu-header-left">
//           {cloudinaryImageId && (
//             <img src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
//           )}
//         </div>
//         <div className="menu-header-right">
//           <div className="top">
//             <h1>{name || 'Restaurant Info'}</h1>
//             <h3>{cuisines && cuisines.length > 0 ? cuisines.join(', ') : ''}</h3>
//           </div>
//           <div className="bottom">
//             {avgRating && (
//               <h4 className="avg-rating">
//                 <AiOutlineStar style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
//                 <span>{avgRating}</span>
//               </h4>
//             )}
//             {deliveryTime && (
//               <h4 className="time">
//                 <FiClock style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
//                 <span>{deliveryTime} MINS</span>
//               </h4>
//             )}
//             {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
//           </div>
//         </div>
//       </header>

//       <div className="menu-main">
//         <h2>Menu</h2>
//         <h3 className="items">{itemCards.length} items</h3>
//         <div className="menu-main-card-container">
//           {itemCards.length > 0 ? (
//             itemCards.map((item) => (
//               <div key={item.card.info.id} className="menu-card">
//                 <div className="menu-card-left">
//                   <h2 className="menu-name">{item.card.info.name}</h2>
//                   <h3 className="menu-price">
//                     ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//                   </h3>
//                   <h4 className="menu-description">
//                     {item.card.info.description || 'No description available'}
//                   </h4>
//                   <button onClick={() => addToCart(item.card.info)}>Add to Cart</button>
//                 </div>
//                 <div className="menu-card-right">
//                   {item.card.info.imageId && (
//                     <img src={CDN_URL + item.card.info.imageId} alt="Menu Item" />
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items available for this restaurant.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ShimmerMenu from './ShimmerMenu';
// import { CDN_URL } from '../utils/constants';
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';
// import useRestaurantMenu from '../utils/useRestaurantMenu';
// import { useCart } from '../context/CartContext'; // Import Cart Context

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const { addToCart, increaseQuantity, decreaseQuantity } = useCart(); // Access Cart Context

//   useEffect(() => {
//     if (resId) {
//       fetchMenu();
//     }
//   }, [resId]);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.141290748112464&lng=75.84227051585913&restaurantId=${resId}`
//       );
//       const json = await response.json();
//       setResInfo(json?.data);
//     } catch (error) {
//       console.error('Error fetching the menu:', error);
//     }
//   };

//   if (resInfo === null) return <ShimmerMenu />;

//   const {
//     name,
//     cuisines,
//     costForTwoMessage,
//     cloudinaryImageId,
//     avgRating,
//     deliveryTime,
//   } = resInfo?.cards?.[0]?.card?.card?.info || {};

//   const itemCards =
//     resInfo?.cards?.find(card => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
//       card => card.card?.card?.itemCards
//     )?.card?.card?.itemCards || [];

//   return (
//     <div className="menu">
//       <header className="menu-header">
//         <div className="menu-header-left">
//           {cloudinaryImageId && (
//             <img src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
//           )}
//         </div>
//         <div className="menu-header-right">
//           <div className="top">
//             <h1>{name || 'Restaurant Info'}</h1>
//             <h3>{cuisines && cuisines.length > 0 ? cuisines.join(', ') : ''}</h3>
//           </div>
//           <div className="bottom">
//             {avgRating && (
//               <h4 className="avg-rating">
//                 <AiOutlineStar style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
//                 <span>{avgRating}</span>
//               </h4>
//             )}
//             {deliveryTime && (
//               <h4 className="time">
//                 <FiClock style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
//                 <span>{deliveryTime} MINS</span>
//               </h4>
//             )}
//             {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
//           </div>
//         </div>
//       </header>

//       <div className="menu-main">
//         <h2>Menu</h2>
//         <h3 className="items">{itemCards.length} items</h3>
//         <div className="menu-main-card-container">
//           {itemCards.length > 0 ? (
//             itemCards.map((item) => (
//               <div key={item.card.info.id} className="menu-card">
//                 <div className="menu-card-left">
//                   <h2 className="menu-name">{item.card.info.name}</h2>
//                   <h3 className="menu-price">
//                     ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//                   </h3>
//                   <h4 className="menu-description">
//                     {item.card.info.description || 'No description available'}
//                   </h4>
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(item.card.info.id)}>-</button>
//                     <span>{item.card.info.quantity || 1}</span>
//                     <button onClick={() => increaseQuantity(item.card.info.id)}>+</button>
//                   </div>
//                   <button onClick={() => addToCart(item.card.info)}>Add to Cart</button>
//                 </div>
//                 <div className="menu-card-right">
//                   {item.card.info.imageId && (
//                     <img src={CDN_URL + item.card.info.imageId} alt="Menu Item" />
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items available for this restaurant.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
// src/components/RestaurantMenu.js
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ShimmerMenu from './ShimmerMenu';
// import { CDN_URL } from '../utils/constants';
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';
// import useRestaurantMenu from '../utils/useRestaurantMenu';
// import { useCart } from '../context/CartContext'; // Import Cart Context

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   const { addToCart, increaseQuantity, decreaseQuantity } = useCart(); // Access Cart Context

//   useEffect(() => {
//     if (resId) {
//       fetchMenu();
//     }
//   }, [resId]);

//   const fetchMenu = async () => {
//     try {
//       const response = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.141290748112464&lng=75.84227051585913&restaurantId=${resId}`
//       );
//       const json = await response.json();
//       setResInfo(json?.data);
//     } catch (error) {
//       console.error('Error fetching the menu:', error);
//     }
//   };

//   if (resInfo === null) return <ShimmerMenu />;

//   const {
//     name,
//     cuisines,
//     costForTwoMessage,
//     cloudinaryImageId,
//     avgRating,
//     deliveryTime,
//   } = resInfo?.cards?.[0]?.card?.card?.info || {};

//   const itemCards =
//     resInfo?.cards?.find(card => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
//       card => card.card?.card?.itemCards
//     )?.card?.card?.itemCards || [];

//   return (
//     <div className="menu">
//       <header className="menu-header">
//         <div className="menu-header-left">
//           {cloudinaryImageId && (
//             <img src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
//           )}
//         </div>
//         <div className="menu-header-right">
//           <div className="top">
//             <h1>{name || 'Restaurant Info'}</h1>
//             <h3>{cuisines && cuisines.length > 0 ? cuisines.join(', ') : ''}</h3>
//           </div>
//           <div className="bottom">
//             {avgRating && (
//               <h4 className="avg-rating">
//                 <AiOutlineStar style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
//                 <span>{avgRating}</span>
//               </h4>
//             )}
//             {deliveryTime && (
//               <h4 className="time">
//                 <FiClock style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
//                 <span>{deliveryTime} MINS</span>
//               </h4>
//             )}
//             {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
//           </div>
//         </div>
//       </header>

//       <div className="menu-main">
//         <h2>Menu</h2>
//         <h3 className="items">{itemCards.length} items</h3>
//         <div className="menu-main-card-container">
//           {itemCards.length > 0 ? (
//             itemCards.map((item) => (
//               <div key={item.card.info.id} className="menu-card">
//                 <div className="menu-card-left">
//                   <h2 className="menu-name">{item.card.info.name}</h2>
//                   <h3 className="menu-price">
//                     ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//                   </h3>
//                   <h4 className="menu-description">
//                     {item.card.info.description || 'No description available'}
//                   </h4>
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(item.card.info.id)}>-</button>
//                     <span>{item.card.info.quantity || 1}</span>
//                     <button onClick={() => increaseQuantity(item.card.info.id)}>+</button>
//                   </div>
//                   <button onClick={() => addToCart(item.card.info)}>Add to Cart</button>
//                 </div>
//                 <div className="menu-card-right">
//                   {item.card.info.imageId && (
//                     <img src={CDN_URL + item.card.info.imageId} alt="Menu Item" />
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items available for this restaurant.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
// src/components/RestaurantMenu.js
// src/components/RestaurantMenu.js
// src/components/RestaurantMenu.js
// src/components/RestaurantMenu.js
// src/components/RestaurantMenu.js
// src/components/RestaurantMenu.js
// src/components/RestaurantMenu.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useCart } from '../context/CartContext'; // Import Cart Context

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { addToCart, increaseQuantity, decreaseQuantity } = useCart(); // Access Cart Context

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.141290748112464&lng=75.84227051585913&restaurantId=${resId}`
      );
      const json = await response.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error('Error fetching the menu:', error);
    }
  };

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards?.[0]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.find(card => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      card => card.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  // Handle Add to Cart with price and quantity
  const handleAddToCart = (item) => {
    const cartItem = {
      ...item.card.info,
      image: CDN_URL + item.card.info.imageId, // Ensure image URL is passed
      price: item.card.info.price / 100 || 0, // Ensure price is in INR and default to 0 if undefined
      quantity: 1, // Default quantity as 1 when added to cart
    };
    addToCart(cartItem); // Add to cart with correct price and quantity
  };

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          {cloudinaryImageId && (
            <img src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
          )}
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name || 'Restaurant Info'}</h1>
            <h3>{cuisines && cuisines.length > 0 ? cuisines.join(', ') : ''}</h3>
          </div>
          <div className="bottom">
            {avgRating && (
              <h4 className="avg-rating">
                <AiOutlineStar style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
                <span>{avgRating}</span>
              </h4>
            )}
            {deliveryTime && (
              <h4 className="time">
                <FiClock style={{ position: 'relative', top: '2px', marginRight: '3px' }} />
                <span>{deliveryTime} MINS</span>
              </h4>
            )}
            {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
          {itemCards.length > 0 ? (
            itemCards.map((item) => (
              <div key={item.card.info.id} className="menu-card">
                <div className="menu-card-left">
                  <h2 className="menu-name">{item.card.info.name}</h2>
                  <h3 className="menu-price">
                    ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                  </h3>
                  <h4 className="menu-description">
                    {item.card.info.description || 'No description available'}
                  </h4>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
                <div className="menu-card-right">
                  {item.card.info.imageId && (
                    <img src={CDN_URL + item.card.info.imageId} alt="Menu Item" />
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No items available for this restaurant.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;