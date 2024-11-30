
// import { useEffect, useState } from 'react';
// import RestaurantCard from './RestaurantCard';
// import { Link } from 'react-router-dom';
// import useOnlineStatus from '../utils/useOnlineStatus';

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [error, setError] = useState(null); // State to handle errors
//   const onlineStatus = useOnlineStatus();  // to check online status of user

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.141290748112464&lng=75.84227051585913&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
      
//       const json = await response.json();
//       const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//       setListOfRestaurants(restaurants);
//       setFilteredRestaurant(restaurants);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Failed to fetch restaurant data. Please try again later.');
//     }
//   };

//   if (onlineStatus === false) {
//     return <h1>Looks like you are Offline</h1>;
//   }

//   if (error) {
//     return <h1>{error}</h1>; // Display error message if any
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Search a restaurant you want..."
//             className="searchBox"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button onClick={() => {
//             const filteredList = listOfRestaurants.filter((res) =>
//               res.info.name.toLowerCase().includes(searchText.toLowerCase())
//             );
//             setFilteredRestaurant(filteredList);
//           }}>
//             Search
//           </button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.info.avgRating && parseFloat(res.info.avgRating) > 4
//             );
//             setFilteredRestaurant(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {filteredRestaurant.map((restaurant) => (
//           <Link
//             style={{
//               textDecoration: 'none',
//               color: '#000',
//             }}
//             key={restaurant.info.id}
//             to={'/restaurants/' + restaurant.info.id}
//           >
//             <RestaurantCard resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useCart } from '../context/CartContext';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { addToCart } = useCart(); // Access Cart Context
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.141290748112464&lng=75.84227051585913&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      
      const json = await response.json();
      const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (onlineStatus === false) {
    return <h1>Looks like you are Offline</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating && parseFloat(res.info.avgRating) > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
          >
            <RestaurantCard
              resData={restaurant}
              addToCart={() => addToCart(restaurant.info)} // Add to cart functionality
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;