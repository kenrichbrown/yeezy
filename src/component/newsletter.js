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

    let firstTimer;
    let interval;

    // 1️⃣ FIRST SHOW → ONLY ON HOMEPAGE
    if (!hasShownOnce && pathname === "/") {
      firstTimer = setTimeout(() => {
        setNews(true);
        localStorage.setItem("newsletter_first_shown", "true");
      }, 5000);
    }

    // 2️⃣ RECURRING SHOW → EVERY 5 MIN ON ANY PAGE (INCLUDING HOME)
    if (hasShownOnce === "true") {
      interval = setInterval(() => {
        setNews(true);
      }, 300000); // 5 minutes
    }

    return () => {
      if (firstTimer) clearTimeout(firstTimer);
      if (interval) clearInterval(interval);
    };
  }, [pathname]);

  // ❌ CLOSE WITHOUT SUBSCRIBING (CAN REAPPEAR)
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
          {/* CLOSE */}
          <button
            onClick={close}
            className="absolute top-3 right-5 text-black text-[28px]"
          >
            ×
          </button>

          <form
            onSubmit={subscribe}
            className="flex flex-col gap-3 py-6 px-4 max-w-[500px] mx-auto"
          >
            <label className="font-mono tracking-wide text-black text-[15px]">
              RECEIVE WEBSITE UPDATES
            </label>

            <input
              type="email"
              required
              placeholder="EMAIL ADDRESS"
              className="px-3 py-3 w-full border outline-0"
            />

            <button
              type="submit"
              className="bg-black text-white font-mono py-3 hover:bg-black/70"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      )}
    </>
  );
}