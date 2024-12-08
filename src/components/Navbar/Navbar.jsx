import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import  "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="bg-white mb-10 fixed w-full z-50 top-0 overflow-hidden start-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="logo">
                    <Link to={""} className='flex items-center  justify-center' >
                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: '#4ea64a' }} />
                        <h1 className='text-2xl font-bold'>Freash Cart</h1>
                    </Link>
                    </div>
                    <div className="flex items-center gap-4 lg:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className=" items-center justify-between hidden gap-64 w-full lg:flex  lg:w-auto lg:order-1" id="navbar-sticky">
                        <div className="nav-link">
                        <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white ">
                            <li>
                                <NavLink to={""} className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 " aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/cart"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/wish-list"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Wish list</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/products"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/categories"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Categories</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/brands"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">Brands</NavLink>
                            </li>
                        </ul>
                        </div>
                        <div className="left-nav  flex justify-center items-center gap-4 lg:mt-0 lg:flex-row md:mt-10 md:flex-col sm:flex-col sm:mt-10 ">
                        <div className="cart-icon relative ">
                            <div className="counter absolute px-3 flex justify-center items-center text-white ">
                                1
                            </div>
                            <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: '#575757' }} />
                        </div>
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Log out</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
