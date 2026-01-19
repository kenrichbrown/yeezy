"use client";
import { useCart } from "@/context/cartContext";
import { useEffect } from "react";

export default function CartDrawer() {
  const {
    cart,
    open,
    setOpen,
    updateQty,
    removeItem,
    total,
  } = useCart();

  const safeTotal = Number.isFinite(total) ? total : 0;

  // ✅ Hook ALWAYS runs, but logic depends on `open`
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ✅ Early return AFTER hooks
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <div
        className="
          absolute right-0 top-0 h-full
          w-full sm:w-[380px]
          bg-white flex flex-col
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-bold text-lg sm:text-base">CART</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl sm:text-xl"
          >
            ×
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          {cart.length === 0 && (
            <p className="text-center opacity-60 mt-20">
              Your cart is empty
            </p>
          )}

          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                className="w-20 sm:w-16 object-contain"
                alt={item.name}
              />

              <div className="flex-1">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">Size: {item.size}</p>

                <p className="mt-1 text-sm">
                  {Number(item.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>

                {/* QTY */}
                <div className="flex items-center gap-4 mt-3">
                  <button
                    onClick={() =>
                      updateQty(item.id, item.size, item.quantity - 1)
                    }
                    className="px-3 py-1 border text-lg"
                  >
                    −
                  </button>

                  <span className="text-sm">{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQty(item.id, item.size, item.quantity + 1)
                    }
                    className="px-3 py-1 border text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-xl leading-none"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="border-t px-5 py-4">
          <div className="flex justify-between font-bold text-base mb-4">
            <span>Total</span>
            <span>
              {safeTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>

          <button
            className="w-full bg-black text-white py-4 disabled:opacity-40 cursor-pionter font-bold font-mono"
            disabled={cart.length === 0}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}