import { createContext, useContext } from "react";

export const CartContext = createContext({
    items: [],
    total: 0,
    totalPrice: 0,
    addToCart(meal, quantity) { },
    increaseQuantity(index) { },
    decreaseQuantity(index) { },
    removeItem(index) { },
    clearCart() { },
});

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }

    return context;
}