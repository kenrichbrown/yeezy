"use client";
import { useState } from "react";
import { useCart } from "@/context/cartContext";

export default function Port({ back, product }) {
  const [preview, setPreview] = useState(false);
  const { addToCart } = useCart();

 const handleAdd = (size) => {
    addToCart({
      id: product.name,
      name: product.name,
      image: product.image,

      // ✅ STRIP SYMBOLS → NUMBER ONLY
      price: Number(
        String(product.price).replace(/[^0-9.]/g, "")
      ),

      size,
    });

    back();
  };



  return (
    <div className="fixed z-50 flex flex-col items-center justify-center">

      {/* HEADER */}
      <div className="w-[360px] flex items-center justify-between mb-30 bg-white py-4 font-bold">
        <h1
          onMouseEnter={() => setPreview(true)}
          onMouseLeave={() => setPreview(false)}
          className="text-[20px] cursor-pointer"
        >
          ?
        </h1>

        <h1 className="bg-white px-25">SELECT SIZE</h1>

        <h1 onClick={back} className="text-[22px] cursor-pointer">
          ×
        </h1>
      </div>

      {/* SIZE SELECTOR */}
      <div className="w-[360px] flex items-center justify-between text-lg font-mono bg-white -translate-y-[32.5px] font-bold">

        {/* SIZE S */}
        <span
          onClick={() => handleAdd("S")}
          className="group cursor-pointer text-md relative w-6 text-center"
        >
          <span className={`transition-opacity duration-200 ${preview ? "opacity-0" : "group-hover:opacity-0"}`}>1</span>
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${preview ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>S</span>
        </span>

        {/* SIZE M */}
        <span
          onClick={() => handleAdd("M")}
          className="group cursor-pointer bg-white px-25 text-md relative w-6 text-center"
        >
          <span className={`transition-opacity duration-200 ${preview ? "opacity-0" : "group-hover:opacity-0"}`}>2</span>
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${preview ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>M</span>
        </span>

        {/* SIZE L */}
        <span
          onClick={() => handleAdd("L")}
          className="group cursor-pointer text-md relative w-6 text-center"
        >
          <span className={`transition-opacity duration-200 ${preview ? "opacity-0" : "group-hover:opacity-0"}`}>3</span>
          <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${preview ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>L</span>
        </span>

      </div>
    </div>
  );
}