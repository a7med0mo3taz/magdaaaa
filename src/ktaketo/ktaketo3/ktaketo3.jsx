import React, { useContext, useEffect } from 'react';
import ktakito3 from '../../assets/RED.jpg';
import { CartContext } from '../../Context/CartContext';

export default function Ktakito3() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Details");

    const { addToCart } = useContext(CartContext)
    return (
        <>
            <div className="flex justify-center items-start mt-20 px-10">
                <div className="grid grid-cols-1 sm:grid-cols-10 md:grid-cols-10 gap-5 w-full max-w-6xl">
                    {/* صورة المنتج */}
                    <div className="col-span-4">
                        <img
                            src={ktakito3}
                            className="w-full h-auto"
                            alt="Product Cover"
                        />
                    </div>

                    {/* تفاصيل المنتج */}
                    <div className="col-span-6 flex flex-col justify-center mb-10">
                        <h2 className="text-4xl text-end  mb-2">  كتاكيتو اكسترا بندق </h2>
                        <p className="mb-4 text-end">
                            بسكويت كتاكيتو شمعدان المصري ،ويفر مقرمش محشو بالشوكولاته الطبيعية ، يمد ب كمية هائلة من الطاقة الشديدة ، يمكن أيضاً غمس البسكويت ف الحليب. <br />
                            #شاركنا أنت مصري                        </p>
                        <div className="flex justify-between items-center mb-4">
                            <span>15 EGY</span>
                            <div>
                                <i className="fa-solid fa-star fa-lg" style={{ color: '#FFD43B' }} />
                                <span className="bg-blue-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                                    5.0
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <button
                                onClick={() => addToCart()}
                                className="text-white w-full bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Add to cart +
                            </button>
                            <button className=''>
                                <i className="fa-solid fa-heart fa-2xl" style={{ color: '#f2071f' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
