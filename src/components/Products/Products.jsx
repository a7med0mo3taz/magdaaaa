import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";
import "./SearchBar.css";
import ktakito1 from "../../assets/YELLOW.jpg";
import ktakito2 from "../../assets/BLUE.jpg";
import ktakito3 from "../../assets/RED.jpg";
import ktakito4 from "../../assets/BROWN.jpg";
import ktakito5 from "../../assets/PIRBLE.jpg";
import ktakito6 from "../../assets/dark.jpg";
import { CartContext } from "../../Context/CartContext";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Products = () => {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Products");

    const { addToCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [loadingProductId, setLoadingProductId] = useState(null);

    // Manual products
    const manualProducts = [
        {
            id: 1,
            title: "كتاكيتو فينجرز  ",
            price: "15 ",
            image: ktakito1,
            rate: 5.0,
        },
        {
            id: 2,
            title: "كتاكيتو  اكسترا شوكولاته ",
            price: "15 ",
            image: ktakito2,
            rate: 5.0,
        },
        {
            id: 3,
            title: "كتاكيتو اكسترا بندق ",
            price: "15 ",
            image: ktakito3,
            rate: 5.0,
        },
        {
            id: 4,
            title: "كتاكيتو شمعدان ساده ",
            price: "15 ",
            image: ktakito4,
            rate: 5.0,
        },
        {
            id: 5,
            title: " كتاكيتو اكسترا لبن ",
            price: "15 ",
            image: ktakito5,
            rate: 5.0,
        },
        {
            id: 6,
            title: "كتاكيتو  دارك  ",
            price: "20 ",
            image: ktakito6,
            rate: 5.0,
        },
    ];

    // Fetching products with React Query
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["products"],
        queryFn: () => axios.get("https://ecommerce.routemisr.com/api/v1/products"),
        staleTime: 1000 * 60 * 15,
    });

    async function handleAddToCart(productId) {
        setLoadingProductId(productId);
        await addToCart(productId);
        setLoadingProductId(null);
    }
    const [isWishListLoading, setIsWishListLoading] = useState({
        handleAddToWishList: false
    });
    const [wishListError, setWishListError] = useState({
        handleAddToWishList: null
    });
    const [wishListData, setWishListData] = useState(null)
    const [favoriteProducts, setFavoriteProducts] = useState({});
    const [loadingFavorites, setLoadingFavorites] = useState({});
    async function handleAddToWishList(productId) {
        setIsWishListLoading((prev) => ({ ...prev, [productId]: true }));
        setLoadingFavorites((prev) => ({ ...prev, [productId]: true }));
        try {
            const { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/wishlist",
                { productId: productId },
                {
                    headers: {
                        token: localStorage.getItem("userToken"),
                    },
                }
            );

            setWishListData(data.data);
            setFavoriteProducts((prev) => ({
                ...prev,
                [productId]: !prev[productId],
            }));

            toast.success("Successfully added to Wish List!", {
                icon: "❤️",
            });
        } catch (err) {
            setWishListError((prev) => ({
                ...prev,
                [productId]: err.response?.data?.message || "Failed to add product.",
            }));
        } finally {
            setIsWishListLoading((prev) => ({ ...prev, [productId]: false }));
            setLoadingFavorites((prev) => ({ ...prev, [productId]: false }));
        }
    }

    // Filter products based on search term
    const filteredProducts = [
        ...(data?.data?.data || []), // التأكد من وجود البيانات
        ...manualProducts,
    ].filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    function renderProducts() {
        return filteredProducts.map((product) => (
            <div
                key={product.id}
                className="flex flex-col justify-center items-center card overflow-hidden my-10 cursor-pointer border border-gray-200 rounded-lg"
            >
                <Link to={"/product-details/" + product.id} className="px-5">
                    <div>
                        <img
                            className="p-8 rounded-t-lg w-full h-full object-cover"
                            src={product.image || product.imageCover}
                            alt="product image"
                        />
                        <div className="px-5">
                            <h5 className="text-xl font-semibold tracking-tight text-green-600">
                                {product.category?.name || "Super Market"}
                            </h5>
                            <p className="line-clamp-1">{product.title}</p>
                            <div className="flex items-center justify-between mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-xl font-bold text-gray-900">
                                        {product.price} EGY
                                    </span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
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
                        onClick={() => handleAddToCart(product.id)}
                        className="btn text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        disabled={loadingProductId === product.id}
                    >
                        {loadingProductId === product.id ? (
                            <i className="fa-solid fa-spinner fa-spin"></i>
                        ) : (
                            "Add to cart +"
                        )}
                    </button>

                    <button onClick={() => handleAddToWishList(product.id)} className="cursor-pointer">
                        {loadingFavorites[product.id] ? (
                            <div className="loadingBg px-2 py-1 rounded-lg"><i className="fa-solid fa-spinner fa-spin" style={{ color: "white" }} /></div>
                        ) : favoriteProducts[product.id] ? (
                            <i className="fa-solid fa-heart fa-2xl" style={{ color: "red" }} />
                        ) : (
                            <i className="fa-solid fa-heart fa-2xl" style={{ color: "black" }} />
                        )}
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <>
            {/* Search Bar */}
            <div className="mt-28 w-full flex justify-center items-center">
                <input
                    type="search"
                    className="block search-bar w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {isLoading && <Loading />}
            {isError && <div>Error: {error.message}</div>}

            {!isLoading && !isError && filteredProducts.length > 0 ? (
                <div className="mx-auto max-w-7xl gap-5 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {renderProducts()}
                </div>
            ) : (
                <p className="text-center text-gray-500">No products found matching your search.</p>
            )}
        </>
    );
};

export default Products;
