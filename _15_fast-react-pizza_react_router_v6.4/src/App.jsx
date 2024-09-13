// ------------- Lec_3 -----------------

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";

/*

// function where we define all routes and we do that by passing in an array of objects where each object is one route.

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>

  },
  {
    path: '/menu',
    element: <Menu/>

  },
  {
    path: '/cart',
    element: <Cart/>

  },
  {
    path: '/order/new',
    element: <CreateOrder/>

  },
  {
    path: '/order/:orderId',
    element: <Order/>

  },
  
]);

function App() {
  
  // RouterProvider comes from react-router-dom
  // Now the text that you see is the text that resides in the <Home/> component.

  // Now , if you change the route from localhost:../ to localhost:.../menu then you'l get the data taht resides in the <Menu/> component.
  return <RouterProvider router = {router}/>

}

export default App

*/

// -------------------- Lec_4 -------------------------

/*

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

*/

// ---------------- Lec_5 ------------------

/*

import Menu , {loader as menuLoader} from "./features/menu/Menu";

// Step-2 : Connecting Loader to /menu route file
const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

*/ 


// ----------------------- Lec_7 ------------------------

// Version-1

/*

import Menu , {loader as menuLoader} from "./features/menu/Menu";

import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

*/

// Version-2 

/*

import Menu , {loader as menuLoader} from "./features/menu/Menu";

import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

*/

// ------------------ Lec_8 --------------------

/*

import Menu , {loader as menuLoader} from "./features/menu/Menu";

import Error from "./ui/Error";

import Order, {loader as orderLoader} from "./features/order/Order";


const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

*/

// ------------------- Lec_9 -------------------


import Menu , {loader as menuLoader} from "./features/menu/Menu";
import Error from "./ui/Error";
import Order, {loader as orderLoader} from "./features/order/Order";

import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder";


const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction, 
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
