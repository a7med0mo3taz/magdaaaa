import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { CartContext } from '../../context/cartContext/CartContext';

export default function ProductDetails() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Details");

    const { addToCart } = useContext(CartContext)
    const { pId } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    async function getProductDetails() {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + pId);
        setProductDetails(data.data);
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <>
            <div className="flex justify-center items-start mt-20">
                {productDetails ? (
                    <div className="grid grid-cols-10 gap-5 w-full max-w-6xl">
                        
                        <div className="col-span-4">
                            <img
                                src={productDetails.imageCover}
                                className="w-full h-auto"
                                alt={productDetails.title || "Product Cover"}
                            />
                        </div>

                        <div className="col-span-6 flex flex-col justify-center">
                            <h2 className="text-4xl text-start mb-2">{productDetails.title}</h2>
                            <p className="mb-4 text-start">{productDetails.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span>{productDetails.price} EGY</span>
                                <div>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: '#FFD43B' }} />
                                    <span className="bg-blue-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                                        {productDetails.ratingsAverage}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-5">
                                <button
                                    onClick={()=>addToCart()}
                                    className="text-white w-full bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Add to cart +
                                </button>
                                <button className=''>
                    <i className="fa-solid fa-heart fa-2xl" style={{color: '#f2071f'}} />

                    </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
}
