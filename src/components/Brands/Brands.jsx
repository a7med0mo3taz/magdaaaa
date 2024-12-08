import React, { useEffect, useState } from 'react'
import  "./Brands.css"
import axios from 'axios'
// import "./Brands.css"
import Loading from '../Loading/Loading'
import { data, Link } from 'react-router-dom'
export default function Brands() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Brands")
    const [brands, setBrands] = useState([])
    async function getBrands() {
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        setBrands(data.data)
    }
    useEffect(() => {
        getBrands()
    })
    function renderBrands() {
        var brandsToHtml = brands.map((brands =>
            <>
                <div className="card hover:shadow-green-600 shadow-lg duration-75">
                    <div className="   bg-white border border-gray-200 rounded-lg ">
                        <Link href="#">
                            <img className="rounded-t-lg" src={brands.image} alt />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-xl text-center  tracking-tight text-gray-900 ">{brands.name}</h5>
                            </Link>
                        </div>
                    </div>
                </div>

            </>
        ))
        return (brandsToHtml)
    }
    return (
        <>
            <div className="mt-40">
                <h2 className='text-center text-4xl mb-5 font-bold title '>All Brands</h2>
                {
                    brands.length == 0 ? <Loading /> :
                        <div className="my-20 mx-auto max-w-7xl justify-items-center align-items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">{renderBrands()}</div>
                }
            </div>
        </>
    )
}
