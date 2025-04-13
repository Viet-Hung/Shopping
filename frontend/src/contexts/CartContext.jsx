import { createContext, useContext, useState } from 'react';

// Tạo context
const CartContext = createContext();

// Custom hook dùng context
export const useCart = () => useContext(CartContext);

// Provider bao quanh App
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Thêm sản phẩm vào giỏ
    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
