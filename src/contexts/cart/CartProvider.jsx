import { useState } from "react";
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {

    const [state, setState] = useState({
        items: [
            {
                meal: {
                    "id": "item-1",
                    "categoryId": "cat-1",
                    "name": "Classic Burger",
                    "description": "Juicy beef patty with lettuce, tomato, onion, and our secret sauce.",
                    "price": 8.99,
                    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
                    "featured": false
                },
                extras: {},
                quantity: 2
            },
            {
                meal: {
                    "id": "item-4",
                    "categoryId": "cat-1",
                    "name": "Bacon Deluxe",
                    "description": "Premium burger with crispy bacon, avocado, and garlic aioli.",
                    "price": 13.99,
                    "imageUrl": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400"
                },
                extras: {},
                quantity: 3
            }
        ],
        total: 5,
    });

    const addToCart = (meal, quantity) => {
        setState((currentState) => {
            const existingItem = currentState.items.find(item => item.meal.id === meal.id);

            if (existingItem) {
                return {
                    ...currentState,
                    items: currentState.items.map(item =>
                        item.meal.id === meal.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                    total: currentState.total + quantity,
                };
            }

            return {
                items: [...currentState.items, { meal, extras: {}, quantity }],
                total: currentState.total + quantity,
            };
        });
    };

    const increaseQuantity = (index) => {
        setState((currentState) => {
            const items = [...currentState.items];

            items[index].quantity += 1;

            return {
                ...currentState,
                items,
                total: currentState.total + 1,
            };
        });
    };

    const decreaseQuantity = (index) => {
        setState((currentState) => {
            const items = [...currentState.items];

            if (items[index].quantity > 1) {

                items[index].quantity -= 1;

                return {
                    ...currentState,
                    items,
                    total: currentState.total - 1,
                };
            }

            return currentState;
        });
    };

    const removeItem = (index) => {
        setState((currentState) => {
            const items = [...currentState.items];

            const removedItem = items.splice(index, 1)[0];
            
            return {
                ...currentState,
                items,
                total: currentState.total - removedItem.quantity,
            };
        });
    };

    const data = {
        items: state.items,
        total: state.total,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider