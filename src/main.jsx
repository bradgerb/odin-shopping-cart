import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import routes from './components/routes.jsx';
// import Pages from './components/Pages.jsx';
// import Home from './components/Home.jsx';
// import Shop from './components/Shop.jsx';
// import Cart from './components/Cart.jsx';
// import Error from './components/Error/Error.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
