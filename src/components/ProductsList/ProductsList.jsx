import ProductCard from './ProductCard';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "بسكويت كتاكيتو",
            price: 15,
            imageUrl: "../../assets/YELLOW.jpg",  // استبدال برابط الصورة الفعلي
            brand: "Super Market",
            rating: "5.0"
        },
        // أضف المزيد من المنتجات هنا
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
