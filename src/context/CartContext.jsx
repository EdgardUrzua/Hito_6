// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
      return [...prevCart, { ...pizza, cantidad: 1 }];
    }
    });
  };

  // Función para eliminar o reducir la cantidad de un producto
  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // Calcular el total del carrito
  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);
