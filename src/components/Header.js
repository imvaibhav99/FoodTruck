// //import { LOGO_URL } from '../utils/constants';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import useOnlineStatus from '../utils/useOnlineStatus';

// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState('Login');  //useState hook used to create login button so that when rerenderd,the login/logout can be changed dynamicaly and shown on UI->initially it will show login 
//   const onlineStatus = useOnlineStatus();
  
//   // * if no dependency array => useEffect is called on every component render of the component
//   // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
//   // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
//   // * Dependency: A depency can be a state variable (or) a function

//   // useEffect(() => {
//   //   console.log(`useEffect Called`);
//   // }, [btnNameReact]);

//   return (
//     <div className="header">
//       <div className="logo-container">
//         {/* <img src={LOGO_URL} alt="App Logo" className="logo" /> */}
//         <Link to="/">
//           <img
//             src="https://i.pinimg.com/originals/43/64/22/436422eeac3b3d79b67e2d3cfa53b44f.jpg"
//             alt="Logo"
//             className="logo"
//           />
//         </Link>
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
//           <li>
//             <Link to="/" className="links">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="links">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="links">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link className="links">Cart</Link>
//           </li>
//           <button
//             className="loginBtn"
//             onClick={() => {
//               //   btnName = 'Logout';
//               btnNameReact === 'Login'   //on click,if  button name is login,i twill change to logout or vice versa.
//                 ? setBtnNameReact('Logout')
//                 : setBtnNameReact('Login');
//               console.log(btnNameReact);
//             }}
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useCart } from '../context/CartContext'; // Import Cart Context

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login'); // Manage login/logout button
  const onlineStatus = useOnlineStatus(); // Check online status
  const { items, totalPrice } = useCart(); // Access cart items and total price

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/43/64/22/436422eeac3b3d79b67e2d3cfa53b44f.jpg"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="links">
              Cart ({items.length}) - ₹{totalPrice.toFixed(2)}
            </Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              setBtnNameReact((prev) => (prev === 'Login' ? 'Logout' : 'Login'));
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;