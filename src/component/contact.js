"use client";
import { useEffect } from "react";
import { useCart } from "@/context/cartContext";

export default function ContactCom({ backFunction }) {
  const { setOpen, cart } = useCart();

  // 🔒 HARD SCROLL LOCK (mobile + desktop safe)
  useEffect(() => {
    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0
        bg-white text-black
        z-[20]
        flex flex-col
        px-4 py-5 sm:p-5
        overflow-y-auto
        overscroll-contain
      "
    >
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <img
          onClick={backFunction}
          className="w-5 cursor-pointer"
          src="/icons8-back-50 (1).png"
          alt="Back"
        />

        <button onClick={() => setOpen(true)} className="relative">
          <img
            className="w-6"
            src="/icons8-shopping-bag-32.png"
            alt="Cart"
          />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex justify-center">
        <div
          className="
            font-mono uppercase tracking-widest
            text-[13px] sm:text-[15px]
            leading-6 sm:leading-7
            max-w-[90%] sm:max-w-2xl
            mt-16 sm:mt-20
            text-left
            space-y-3
          "
        >
          <p>ALL SALES FINAL</p>

          <p>
            All sales are final due to the low cost of goods. We do not offer
            returns, exchanges, or refunds. Please review your order carefully
            before completing your purchase.
          </p>

          <p>ORDER ISSUES</p>

          <p>
            For any issues with your order (e.g., wrong item or defective
            product), contact us at contact@yeezy.com. Please include your order
            number and details of the issue.
          </p>
        </div>
      </div>
    </div>
  );
}