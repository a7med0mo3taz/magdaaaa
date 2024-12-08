import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import WishList from './components/WishList/WishList'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import ProductDetails from './components/productDetails/productDetails'
import Ktakito1 from './ktaketo/ktaketo1/Ktakito1'
import Ktakito2 from './ktaketo/ktaketo2/Ktaketo2'
import Ktakito3 from './ktaketo/ktaketo3/ktaketo3'
import Ktakito4 from './ktaketo/ktaketo4/Ktaketo4'
import Ktakito5 from './ktaketo/ktaketo5/Ktaketo5'
import Ktakito6 from './ktaketo/ktaketo6/ktaketo6'

import { CartProvider } from './context/cartContext/CartContext'



function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "cart", element: <CartProvider><Cart /></CartProvider> },
        { path: "wish-list", element: <WishList /> },
        { path: "products", element: <CartProvider><Products /></CartProvider> },
        { path: "product-details/:pId", element: <ProductDetails /> },
        { path: "product-details/1", element: <CartProvider><Ktakito1 /></CartProvider> },
        { path: "product-details/2", element: <CartProvider><Ktakito2 /></CartProvider> },
        { path: "product-details/3", element: <CartProvider><Ktakito3 /></CartProvider> },
        { path: "product-details/4", element: <CartProvider><Ktakito4 /></CartProvider> },
        { path: "product-details/5", element: <CartProvider><Ktakito5 /></CartProvider> },
        { path: "product-details/6", element: <CartProvider><Ktakito6 /></CartProvider> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ])
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    
  )
}

export default App


