"use client";
import { useRef, useState, useEffect } from "react";
import Port from "./port";
import cloths from "@/data-sources/all-product";
import { useCart } from "@/context/cartContext";

export default function SectionOverview({
  category = "all",
  first = null,
  back,
}) {
  const products =
    category === "all"
      ? cloths
      : cloths.filter((p) => p.category === category);

  const boxRef = useRef(null);
  const [active, setActive] = useState(0);
  const [portal, setPortal] = useState(false);

  const { setOpen, cart } = useCart();

  const startIndex = first
    ? products.findIndex((p) => p.image === first.image)
    : 0;

  useEffect(() => {
    if (!boxRef.current) return;
    const height = boxRef.current.clientHeight;
    boxRef.current.scrollTo({
      top: startIndex * height,
      behavior: "instant",
    });
    setActive(startIndex);
  }, [startIndex]);

  useEffect(() => {
    if (!boxRef.current) return;
    const closeOnScroll = () => setPortal(false);
    const el = boxRef.current;
    el.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => el.removeEventListener("scroll", closeOnScroll);
  }, []);

  const handleScroll = () => {
    if (!boxRef.current) return;
    const { scrollTop, clientHeight } = boxRef.current;
    setActive(Math.round(scrollTop / clientHeight));
  };

  useEffect(() => {
  // lock background scroll
  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    // restore scroll when component unmounts
    document.body.style.overflow = originalOverflow;
  };
}, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">

      {/* BACK */}
      <div className="absolute top-8 left-8">
        <img
          onClick={() => back && back()}
          className="w-5 cursor-pointer"
          src="/icons8-back-50 (1).png"
          alt="Back"
        />
      </div>

      {/* CART ICON */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => setOpen(true)}   // ✅ ONLY OPEN CART
          className="relative"
        >
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

      {/* PRODUCT BOX */}
      <div className="flex-1 flex items-center justify-center pb-50 w-full">
        <div className="w-[620px] h-[760px] flex flex-col overflow-hidden">

          {/* IMAGE SCROLLER */}
          <div
            ref={boxRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-hide overscroll-contain scroll-smooth touch-pan-y"
          >
            {products.map((item, index) => (
              <div
                key={index}
                className="h-full snap-center flex items-center justify-center"
              >
                <img
                  src={item.image}
                  className="max-h-[420px] object-contain"
                  alt={item.name}
                />
              </div>
            ))}
          </div>

          {/* FIXED INFO */}
          <div className="h-28 flex flex-col items-center justify-center gap-7 bg-white mb-5">
            <p className="text-[17px] font-bold font-mono tracking-wide">
              {products[active]?.name}
            </p>

            <p className="text-[15px] font-mono font-bold">
              {products[active]?.price}
            </p>

            <p
              onClick={() => setPortal(true)}
              className="text-[30px] font-medium cursor-pointer"
            >
              +
            </p>

            {portal && (
              <Port
                product={products[active]}
                back={() => setPortal(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}