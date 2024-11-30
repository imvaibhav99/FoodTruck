// // src/components/CartPage.js
// import React from 'react';
// import { useCart } from '../context/CartContext';

// const CartPage = () => {
//   const { items, totalPrice, removeFromCart } = useCart(); // Use Cart Context

//   const handleRemove = (index) => {
//     removeFromCart(index); // Call removeFromCart when the button is clicked
//   };

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="cart-items">
//           {items.map((item, index) => (
//             <li key={index} className="cart-item">
//               <img src={item.image} alt={item.name} />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>₹{item.price / 100}</p>
//               </div>
//               <div className="cart-item-actions">
//                 <button onClick={() => handleRemove(index)}>Remove</button> {/* Call handleRemove */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       <div className="cart-summary">
//         <h2>Order Summary</h2>
//         <p>
//           Subtotal: <span>₹{totalPrice.toFixed(2)}</span>
//         </p>
//         <p>
//           Delivery Fee: <span>₹50.00</span>
//         </p>
//         <p className="total-price">
//           Total: <span>₹{(totalPrice + 50).toFixed(2)}</span>
//         </p>
//         <button>Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
// src/components/CartPage.js
// src/components/CartPage.js
// src/components/CartPage.js
// src/components/CartPage.js
// src/components/CartPage.js
// src/components/CartPage.js
// src/components/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const isCartEmpty = items.length === 0;
  const deliveryFee = 50.00; // Delivery fee value

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {isCartEmpty ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item, index) => (
            <li key={index} className="cart-item">
              {/* Food Image */}
              <img src={item.image} alt={item.name} className="cart-item-image" />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{(item.price * item.quantity).toFixed(2)}</p> {/* Price for each item */}
              </div>

              <div className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>

              <div className="cart-item-actions">
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>
          Subtotal: <span>₹{totalPrice.toFixed(2)}</span>
        </p>

        {/* Only display delivery fee if the cart is not empty */}
        {!isCartEmpty && (
          <p>
            Delivery Fee: <span>₹{deliveryFee.toFixed(2)}</span>
          </p>
        )}

        <p className="total-price">
          Total: <span>₹{(totalPrice + (isCartEmpty ? 0 : deliveryFee)).toFixed(2)}</span>
        </p>
        <button disabled={isCartEmpty}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;