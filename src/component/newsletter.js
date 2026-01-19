"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NewsLetter() {
  const [news, setNews] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // ❌ NEVER SHOW AGAIN IF SUBSCRIBED
    const subscribed = localStorage.getItem("newsletter_subscribed");
    if (subscribed === "true") return;

    const hasShownOnce = localStorage.getItem("newsletter_first_shown");

    // 1️⃣ FIRST SHOW → ONLY ON HOMEPAGE
    if (!hasShownOnce && pathname === "/") {
      const firstTimer = setTimeout(() => {
        setNews(true);
        localStorage.setItem("newsletter_first_shown", "true");
      }, 5000);

      return () => clearTimeout(firstTimer);
    }

    // 2️⃣ RECURRING SHOW → ANY PAGE AFTER 5 MIN
    const interval = setInterval(() => {
      setNews(true);
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, [pathname]);

  // ❌ CLOSE WITHOUT SUBSCRIBING (CAN REAPPEAR LATER)
  const close = () => {
    setNews(false);
  };

  // ✅ SUBSCRIBE → NEVER SHOW AGAIN
  const subscribe = (e) => {
    e.preventDefault();
    localStorage.setItem("newsletter_subscribed", "true");
    setNews(false);
  };

  return (
    <>
      {news && (
        <div className="fixed bottom-0 left-0 w-full bg-white/2 backdrop-blur-sm z-50">
          {/* Close Button */}
          <button
            onClick={close}
            className="absolute top-3 right-5 text-black text-[28px] cursor-pointer"
          >
            ×
          </button>

          <form
            onSubmit={subscribe}
            className="flex flex-col items-start gap-3 py-6 px-4 max-w-[500px] mx-auto"
          >
            <label className="font-mono tracking-wide text-black text-[15px]">
              RECEIVE WEBSITE UPDATES
            </label>

            <input
              type="email"
              required
              placeholder="EMAIL ADDRESS"
              className="px-3 py-3 w-full text-black border outline-0"
            />

            <button
              type="submit"
              className="bg-black text-white font-mono py-3 border border-black hover:bg-black/70 w-full cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      )}
    </>
  );
}