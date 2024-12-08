import React, { useEffect } from 'react'
import  "./Home.css"
import Carousel from '../Carousel/Carousel'
import CategoriesCarousel from '../CategoriesCarousel/CategoriesCarousel'
import Products from '../Products/Products'
import { CartProvider } from '../../context/cartContext/CartContext';

export default function Home() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Home")
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            {/* <Carousel/> */}
            <CartProvider>
            <Products/>
            </CartProvider>
        </div>
        </>
    )
}
