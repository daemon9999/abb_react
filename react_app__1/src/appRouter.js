import { createBrowserRouter } from "react-router-dom"
import Home from "pages/home/Home"
import MainLayout from "pages/main-layout/MainLayout"
import Cart from "pages/cart/Cart"
import Favorites from "pages/favorites/Favorites"
 const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'favorites',
                element: <Favorites />
            }
        ]
    }
])

export default appRouter