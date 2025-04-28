import { createContext, useContext, useState } from "react";
const CartContext = createContext(undefined);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addToCart = (product) => {
        setItems(
            currentItems => {
                const existingItem = currentItems.find(item => item.id === product.id);
                if(existingItem) {
                    return currentItems.map(
                        item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                    )
                }
                return [...currentItems, {...product, quantity: 1}]
            }
        );
    };

    const removeFromCart = (productId) => {
        setItems(
            currentItems => currentItems.filter(item => item.id !== productId)
        )
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        setItems( 
            currentItems => currentItems.map(
                item => item.id === productId ? {...item, quantity: quantity} : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    return (
        <CartContext.Provider
            values={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    // if (context === undefined) {
    //     throw new Error('useCart must be used within a cart Provider')
    // }
    return context;
}

