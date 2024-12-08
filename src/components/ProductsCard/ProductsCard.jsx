
import { Link } from "react-router-dom";
import ktakito1 from '../../assets/YELLOW.jpg';  // تأكد من استيراد الصورة بشكل صحيح
import { useCart } from "../../context/cartContext/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart(); // استدعاء وظيفة إضافة المنتج للسلة

    return (
        <div className="flex flex-col justify-center items-center card overflow-hidden my-10 cursor-pointer border border-gray-200 rounded-lg">
            <Link to={`/product-details/1`}>
                <div key={1} className="">
                    <img className="h-[400px] object-cover p-8 rounded-t-lg" src={ktakito1} alt={ktakito1} />
                    <div className="px-5">
                        <h5 className="text-xl font-semibold tracking-tight text-green-600">{product.brand}</h5>
                        <p>{prouct.name}</p>
                        <div className="flex items-center justify-between mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <span className="text-3xl font-bold text-gray-900">{product.price} EGY</span>
                            </div>
                            <div>
                                <i className="fa-solid fa-star fa-lg" style={{ color: '#FFD43B' }} />
                                <span className="bg-blue-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="flex items-center justify-between gap-10 pb-4">
                <button
                    onClick={() => addToCart(product)}  // إضافة المنتج للسلة
                    className="btn text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Add to cart +
                </button>

                <i className="fa-solid fa-heart fa-2xl" />
            </div>
        </div>
    );
};

export default ProductCard;
