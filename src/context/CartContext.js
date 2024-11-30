// import React, { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       // Add new item with quantity set to 1 if it doesn't exist
//       return {
//         ...state,
//         items: [
//           ...state.items,
//           { ...action.payload, quantity: 1 } // Initialize quantity as 1
//         ],
//         totalPrice: state.totalPrice + action.payload.price, // Add the price of the item to the total
//       };

//     case 'REMOVE_FROM_CART':
//       const updatedItems = state.items.filter((_, index) => index !== action.payload.index);
//       const removedPrice = state.items[action.payload.index]?.price * state.items[action.payload.index]?.quantity || 0;
//       return {
//         ...state,
//         items: updatedItems,
//         totalPrice: state.totalPrice - removedPrice, // Subtract removed item's total price
//       };

//     case 'INCREASE_QUANTITY':
//       const increasedItems = state.items.map((item, index) =>
//         index === action.payload.index
//           ? { ...item, quantity: item.quantity + 1 } // Increase quantity
//           : item
//       );
//       const increasePrice = state.items[action.payload.index]?.price || 0;
//       return {
//         ...state,
//         items: increasedItems,
//         totalPrice: state.totalPrice + increasePrice, // Add the price of 1 more item
//       };

//     case 'DECREASE_QUANTITY':
//       const decreasedItems = state.items.map((item, index) =>
//         index === action.payload.index && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 } // Decrease quantity
//           : item
//       );
//       const decreasePrice = state.items[action.payload.index]?.price || 0;
//       return {
//         ...state,
//         items: decreasedItems,
//         totalPrice: state.totalPrice - decreasePrice, // Subtract the price of 1 item
//       };

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { items: [], totalPrice: 0 });

//   const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });
//   const removeFromCart = (index) => dispatch({ type: 'REMOVE_FROM_CART', payload: { index } });
//   const increaseQuantity = (index) => dispatch({ type: 'INCREASE_QUANTITY', payload: { index } });
//   const decreaseQuantity = (index) => dispatch({ type: 'DECREASE_QUANTITY', payload: { index } });

//   return (
//     <CartContext.Provider value={{ ...state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If item already exists, increase the quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity
            : item
        );
        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0), // Recalculate totalPrice
        };
      } else {
        // If item doesn't exist, add it to the cart with price and quantity
        const newItem = {
          ...action.payload,
          price: action.payload.price || 0, // Ensure price is correctly passed
          quantity: 1, // Initialize quantity as 1
        };
        return {
          ...state,
          items: [...state.items, newItem],
          totalPrice: state.totalPrice + newItem.price, // Add the new item's price to the total
        };
      }

    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter((_, index) => index !== action.payload.index);
      const removedItem = state.items[action.payload.index];
      const removedPrice = removedItem.price * removedItem.quantity || 0;
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - removedPrice, // Subtract the removed item price from the total
      };

    case 'INCREASE_QUANTITY':
      const increasedItems = state.items.map((item, index) =>
        index === action.payload.index
          ? { ...item, quantity: item.quantity + 1 } // Increase quantity
          : item
      );
      const increasedPrice = state.items[action.payload.index]?.price || 0;
      return {
        ...state,
        items: increasedItems,
        totalPrice: increasedItems.reduce((acc, item) => acc + item.price * item.quantity, 0), // Recalculate totalPrice
      };

    case 'DECREASE_QUANTITY':
      const decreasedItems = state.items.map((item, index) =>
        index === action.payload.index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } // Decrease quantity
          : item
      );
      const decreasedPrice = state.items[action.payload.index]?.price || 0;
      return {
        ...state,
        items: decreasedItems,
        totalPrice: decreasedItems.reduce((acc, item) => acc + item.price * item.quantity, 0), // Recalculate totalPrice
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], totalPrice: 0 });

  const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (index) => dispatch({ type: 'REMOVE_FROM_CART', payload: { index } });
  const increaseQuantity = (index) => dispatch({ type: 'INCREASE_QUANTITY', payload: { index } });
  const decreaseQuantity = (index) => dispatch({ type: 'DECREASE_QUANTITY', payload: { index } });

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);