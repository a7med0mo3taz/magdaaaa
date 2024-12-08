import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  "./Categories.css"
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
export default function Categories() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Categories")
    const [categories, setCategories] = useState([])
    async function getCategories() {
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        setCategories(data.data)
    }
    useEffect(() => {
        getCategories();
    })
    function renderCategories() {
        var categoriesToHtml = categories.map((categories) =>
            <>

                <div className="max-w-sm max-h-72 overflow-hidden flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <img className="rounded-t-lg" src={categories.image} alt />
                    </Link>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">{categories.name}</h5>
                        </a>
                    </div>
                </div>


            </>
        )
        return (categoriesToHtml)
    }
    return (
        <>
            <div className="container flex justify-center items">

                {
                    // handle loading 
                    categories.length == 0 ? <Loading /> :
                        // grid-cols-5 
                        <div className=" grid grid-cols-3 gap-2"> {renderCategories()} </div>
                }
            </div>
        </>
    )
}
