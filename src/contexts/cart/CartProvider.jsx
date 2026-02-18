import { useMemo, useState } from "react";
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {

    const [state, setState] = useState({items: [], total: 0});

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

    const clearCart = () => {
        setState({
            items: [],
            total: 0,
        });
    };

    const totalPrice = useMemo(() => {
        return state.items.reduce((total, item) => {
            return total + item.meal.price * item.quantity;
        }, 0);
    }, [state.items]);

    const data = {
        items: state.items,
        total: state.total,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider