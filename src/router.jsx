import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'favorites', element: <FavoritesPage /> },
            { path: 'about', element: <AboutPage /> }
        ]
    }
]);