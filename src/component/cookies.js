"use client";
import { useState, useEffect } from "react";

export default function Cookies({ backFunction6 }) {
  const [on, onSet] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cookie_targeted_analytics") === "true";
    }
    return false;
  });

  const [foot, footSet] = useState(false);
  const [foot2, foot2Set] = useState(false);

  // lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cookie_targeted_analytics", on);
  }, [on]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={backFunction6}
        className="absolute inset-0 bg-black/65"
      />

      {/* MODAL */}
      <div className="relative bg-white font-mono text-black flex flex-col w-full h-full sm:w-[700px] sm:h-[600px]">
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-black/15">
          <h1 className="font-bold text-[14px] sm:text-[16px]">
            MANAGE COOKIE PREFERENCES
          </h1>
          <img
            onClick={backFunction6}
            className="w-8 sm:w-10 cursor-pointer"
            src="/icons8-close-window-72.png"
            alt="Close"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8">
          <h2 className="font-bold text-[14px] sm:text-[15px] mt-4">
            YOUR PRIVACY CHOICES
          </h2>

          <p className="text-[13px] sm:text-[14px] uppercase text-black/65 mt-2">
            In this panel you can express some preferences related to the
            processing of your personal information.
          </p>

          {/* STRICTLY NECESSARY */}
          <div className="mt-6 border border-black/15">
            <button
              onClick={() => footSet(!foot)}
              className="w-full flex justify-between items-center px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <img
                  src={
                    foot
                      ? "/icons8-down-arrow-64 (1).png"
                      : "/icons8-down-arrow-64.png"
                  }
                  className="w-4"
                />
                <span className="font-bold text-[13px] sm:text-[14px]">
                  STRICTLY NECESSARY
                </span>
              </div>
              <img className="w-8" src="/off-button.png" />
            </button>

            {foot && (
              <div className="border-t border-black/10">
                <p className="text-[13px] sm:text-[14px] uppercase text-black/65 px-4 py-4">
                  THESE COOKIES ARE ESSENTIAL FOR THE PROPER FUNCTIONING OF THE
                  WEBSITE AND CANNOT BE DISABLED.
                </p>

                <p className="font-bold text-[12px] uppercase px-4 pb-2">
                  COOKIE TABLE
                </p>

                {/* ROW 1 */}
                <div className="border-t border-black/10 px-4 py-3 text-[12px] uppercase">
                  <p className="font-bold">COOKIE</p>
                  <p>SWELL - SESSION</p>
                  <p className="font-bold mt-2">DOMAIN</p>
                  <p>YEEZY.COM</p>
                  <p className="font-bold mt-2">DESCRIPTION</p>
                  <p>SWELL SESSION COOKIE LINKING YOU TO YOUR CART</p>
                </div>

                {/* ROW 2 */}
                <div className="border-t border-black/10 px-4 py-3 text-[12px] uppercase">
                  <p className="font-bold">COOKIE</p>
                  <p>CC_COOKIE</p>
                  <p className="font-bold mt-2">DOMAIN</p>
                  <p>YEEZY.COM</p>
                  <p className="font-bold mt-2">DESCRIPTION</p>
                  <p>
                    CONSENT COOKIE TO TRACK YOUR CONSENT TO OUR USE OF COOKIES
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* TARGETED ANALYTICS */}
          <div className="mt-4 border border-black/15">
            <button
              onClick={() => foot2Set(!foot2)}
              className="w-full flex justify-between items-center px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <img
                  src={
                    foot2
                      ? "/icons8-down-arrow-64 (1).png"
                      : "/icons8-down-arrow-64.png"
                  }
                  className="w-4"
                />
                <span className="font-bold text-[13px] sm:text-[14px]">
                  TARGETED ANALYTICS
                </span>
              </div>
              <img
                onClick={() => onSet(!on)}
                className="w-8 cursor-pointer"
                src={on ? "/icons8-toggle-on-50.png" : "/off-button.png"}
              />
            </button>

            {foot2 && (
              <div className="border-t border-black/10">
                {[
                  ["rl_session", "Unique session ID used to track your activity on the site"],
                  ["rl_anonymous_id", "Unique anonymous user ID used to track your cart"],
                  ["rl_page_init_referrer", "Where you came from to this page"],
                  ["_fbq", "Facebook tracking cookie used to track actions"],
                  ["_fbp", "Meta cookie used to distinguish browsers"],
                  ["_fbc", "Meta cookie storing click ID (fbclid)"],
                  ["ttclid", "TikTok click ID used for ad attribution"],
                ].map(([cookie, desc], i) => (
                  <div
                    key={i}
                    className="border-t border-black/10 px-4 py-3 text-[12px] uppercase"
                  >
                    <p className="font-bold">COOKIE</p>
                    <p>{cookie}</p>
                    <p className="font-bold mt-2">DOMAIN</p>
                    <p>YEEZY.COM</p>
                    <p className="font-bold mt-2">DESCRIPTION</p>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MORE INFO */}
          <div className="border border-black/15 mt-6 px-4 py-5">
            <p className="font-bold text-[13px] mb-2">MORE INFORMATION</p>
            <p className="text-[12px] uppercase">
              FOR ANY QUERIES IN RELATION TO MY POLICY ON COOKIES AND YOUR
              CHOICES, PLEASE CONTACT US
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-black/15 px-4 py-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={backFunction6}
            className="bg-black text-white py-3 text-[12px] font-bold"
          >
            ACCEPT ALL
          </button>
          <button
            onClick={backFunction6}
            className="bg-black text-white py-3 text-[12px] font-bold"
          >
            REJECT ALL
          </button>
          <button
            onClick={backFunction6}
            className="border py-3 text-[12px] font-bold"
          >
            ACCEPT CURRENT SELECTION
          </button>
        </div>
      </div>
    </div>
  );
}