import { createBrowserRouter } from "react-router";
import App from "../components/App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Catalog from "../pages/catalog/Catalog";
import ProductDetail from "../pages/catalog/ProductDetail";
import ServerError from "../model/ServerError";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {path:"",element:<Home/>},
            {path:"about",element:<About/>},
            {path:"contact",element:<Contact/>},
            {path:"catalog",element:<Catalog/>},
            {path:"catalog/:id",element:<ProductDetail/>},
            {path:"servererror",element:<ServerError/>}
        ]
    }])