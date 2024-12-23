import { createBrowserRouter } from "react-router"
import Layout from "../layout/layout"
import { Home } from "../pages/Home"
import Product from "../pages/Product"
import ProductDetail from "../pages/ProductDetail"
import Cart from "../pages/Cart"
import { Provider } from "react-redux";
import { store } from "../store/user"
import User from "../pages/User"


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={store}>
          <Layout></Layout>
        </Provider>,
        children : [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Product />,
            },
            {
                path: "/products/:id",
                element: <ProductDetail />,
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/user",
                element : <User />
            },
            {
                path : "/order",
                element : <User />
            },
            {
                path : "/complaint",
                element : <User />
            }
        ]
    }
])
export default routes