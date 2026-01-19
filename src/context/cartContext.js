"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  // OPTIONAL: clear broken old cart once
  useEffect(() => {
    setCart([]);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find(
        (i) => i.id === product.id && i.size === product.size
      );

      if (found) {
        return prev.map((i) =>
          i.id === product.id && i.size === product.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setOpen(true);
  };

  const updateQty = (id, size, qty) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size
          ? { ...i, quantity: Math.max(1, qty) }
          : i
      )
    );
  };

  const removeItem = (id, size) => {
    setCart((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size))
    );
  };

  // ✅ BULLETPROOF TOTAL
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price);
    const qty = Number(item.quantity);

    if (Number.isNaN(price) || Number.isNaN(qty)) return sum;

    return sum + price * qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        open,
        setOpen,
        addToCart,
        updateQty,
        removeItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};