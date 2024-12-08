import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Products.css"
import "./SearchBar.css"

import ktakito1 from '../../assets/YELLOW.jpg';
import ktakito2 from '../../assets/BLUE.jpg';
import ktakito3 from '../../assets/RED.jpg';
import ktakito4 from '../../assets/BROWN.jpg';
import ktakito5 from '../../assets/PIRBLE.jpg';
import ktakito6 from '../../assets/dark.jpg';
import { CartContext } from '../../context/cartContext/CartContext';
import Loading from '../Loading/Loading';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { addToCart } = useContext(CartContext);

    // المنتجات اليدوية التي أنشأتها
    const manualProducts = [
        {
            id: 1,
            title: 'Super Market',
            price: '15 EGY',
            description: 'بسكويت كتاكيتو',
            image: ktakito1,
            rate: 5.0,
        },
        {
            id: 2,
            title: 'Super Market',
            price: '15 EGY',
            description: 'بسكويت كتاكيتو',
            image: ktakito2,
            rate: 5.0,
        },
        {
            id: 3,
            title: 'Super Market',
            price: '15 EGY',
            description: 'بسكويت كتاكيتو',
            image: ktakito3,
            rate: 5.0,
        },
        // React Framework
        {
            id: 4,
            title: 'Super Market',
            price: '15 EGY',
            description: 'بسكويت كتاكيتو',
            image: ktakito4,
            rate: 5.0,
        },
        {
            id: 5,
            title: 'Super Market',
            price: '15 EGY',
            description: 'بسكويت كتاكيتو',
            image: ktakito5,
            rate: 5.0,
        },
        {
            id: 6,
            title: 'Super Market',
            price: '20 EGY',
            description: 'بسكويت كتاكيتو',
            image: ktakito6,
            rate: 5.0,
        },
    ];

    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Products");


    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
                // دمج المنتجات التي تم جلبها من API مع المنتجات اليدوية
                setProducts([...response.data.data, ...manualProducts]);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    // تصفية المنتجات بناءً على النص في شريط البحث
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // دالة لعرض المنتجات
    const renderProducts = () => {
        if (products.length === 0) {
            return <Loading />;
        }

        return filteredProducts.map(product => (
            <div key={product.id} className="flex flex-col card justify-center items-center card overflow-hidden my-10 cursor-pointer border border-gray-200 rounded-lg">
                <Link to={`/product-details/${product.id}`}>
                    <div>
                        <img className="h-[400px] object-cover p-8 rounded-t-lg" src={product.image || product.imageCover} alt="product image" />
                        <div className="px-5">
                            <h5 className="text-xl font-semibold tracking-tight text-green-600 line-clamp-1">{product.title}</h5>
                            <p className='line-clamp-1'>{product.description}</p>
                            <div className="flex items-center justify-between mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: '#FFD43B' }} />
                                    <span className="bg-blue-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                                        {product.rate || product.ratingsAverage}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center justify-between gap-10 pb-4">
                    <button
                        onClick={() => addToCart(product)}
                        className="btn text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Add to cart +
                    </button>

                    <button className=''>
                    <i className="fa-solid fa-heart fa-2xl" style={{color: '#f2071f'}} />

                    </button>
                </div>
                </div>
            
        ));
    };


    return (
        <div className="max-w-screen-xl mt-20 mx-auto px-4 py-10">
            <input
                type="text"
                className="w-full p-3 mx-auto border rounded-lg mb-6"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {renderProducts()}
            </div>
        </div>
    );
};

export default Products;
