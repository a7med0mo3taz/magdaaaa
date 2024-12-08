import React, { createContext, useState } from "react";

// إنشاء الحاوية (Context)
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // وظيفة لإضافة منتج إلى السلة
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // تحقق مما إذا كان المنتج موجودًا بالفعل في السلة
            const existingProduct = prevItems.find((item) => item.id === product.id);

            if (existingProduct) {
                // تحديث الكمية إذا كان المنتج موجودًا
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // إضافة المنتج إلى السلة
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // وظيفة لإزالة منتج من السلة
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
