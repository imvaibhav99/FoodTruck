// import React from 'react';
// import ReactDOM from 'react-dom/client';//to access path for different sections of website along with same header

// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
// import RestaurantMenu from './components/RestaurantMenu';

// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';  

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />  {/*different components of the page will be shown according to outlet with same header i.e. childern components will be shown with parent*/}
//       <Footer />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([    //giving path to different components of the webpage
//   {
//     path: '/',
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         element: <Body />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/restaurants/:resId',
//         element: <RestaurantMenu />,
//       },
//     ],
//     errorElement: <Error />,
//   },
 
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />);   //standard code to render the components
import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import CartPage from './components/CartPage.js'; // New Cart Page

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import Cart Context Provider

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* Children components will render here */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart', // New Route for Cart Page
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider> {/* Wrap the application in CartProvider */}
    <RouterProvider router={appRouter} />
  </CartProvider>
);