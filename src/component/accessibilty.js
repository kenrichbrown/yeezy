import { useEffect } from "react";
import { useCart } from "@/context/cartContext";
export default function Access({ backFunction4 }) {
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
    <div className="w-full h-screen bg-white text-black fixed top-0 left-0 z-20 flex flex-col p-5 overflow-y-auto">
      {/* Top bar */}
      <div className="flex flex-row justify-between items-center mb-10">
        <img
          onClick={backFunction4}
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

      {/* Content */}
      <div className="font-mono text-[15px] font-normal uppercase leading-7 tracking-widest max-w-2xl mx-auto text-left space-y-4 mb-10">
        <p>
          We are committed to making our website accessible to all individuals,
          including those with disabilities. Our ongoing efforts aim to enhance
          usability and ensure that our site meets accessibility standards,
          enabling everyone to navigate and interact with the content
          comfortably and independently.
        </p>

        <h2 className="text-lg font-bold mt-4">Disclaimer</h2>
        <p>
          We continually strive to improve the accessibility of our site and
          services. However, accessibility is an evolving process, and there may
          be instances where certain content is not fully optimized. We are
          working diligently to identify and address any such issues.
        </p>

        <h2 className="text-lg font-bold mt-4">Support</h2>
        <p>
          If you encounter any difficulties while using our site or require
          assistance, please reach out to us, and we will gladly help.
        </p>

        <h2 className="text-lg font-bold mt-4">Contact</h2>
        <p>
          For questions or to report accessibility issues, please contact our
          support team via email or mail:
        </p>
        <p>
          <strong>Email:</strong> contact@yeezy.com
        </p>
        <p>
          <strong>Address:</strong> Yeezy LLC, 8025 Melrose Ave, Los Angeles, CA
          90046
          <br />
          Attn: Hussein Lalani, Finance & Accounting
          <br />
          <strong>Email:</strong> hussein@yeezy.com
        </p>
      </div>
    </div>
  );
}