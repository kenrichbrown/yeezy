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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cookie_targeted_analytics", on);
  }, [on]);

  function toggle() {
    onSet((prev) => !prev);
  }
  function toggle1() {
    footSet((prev) => !prev);
  }
  function toggle2() {
    foot2Set((prev) => !prev);
  }

  // Data for the Analytics section
  const analyticsCookies = [
    [
      "rl_session",
      "YEEZY.COM",
      "Unique session ID used to track your activity on the site",
    ],
    [
      "rl_anonymous_id",
      "YEEZY.COM",
      "Unique anonymous user ID used to track your cart",
    ],
    ["rl_page_init_referrer", "YEEZY.COM", "Where you came from to this page"],
    ["_fbq", "YEEZY.COM", "Facebook tracking cookie used to track actions"],
    ["_fbp", "YEEZY.COM", "Meta cookie used to distinguish browsers"],
    ["_fbc", "YEEZY.COM", "Meta cookie storing click ID (fbclid)"],
    ["ttclid", "YEEZY.COM", "TikTok click ID used for ad attribution"],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={backFunction6} className="absolute inset-0 bg-black/65" />

      <div className="relative bg-white font-mono text-black flex flex-col w-full h-full sm:w-[700px] sm:h-[600px]">
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-black/15">
          <h1 className="text-[14px] sm:text-[16px] font-bold px-2 sm:px-5 uppercase">
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
        <div className="px-4 sm:px-8 flex-1 overflow-y-auto pb-32">
          <h1 className="text-[14px] sm:text-[15px] font-bold mt-3 mb-3 uppercase">
            YOUR PRIVACY CHOICES
          </h1>
          <p className="text-[13px] sm:text-[14px] text-black/65 uppercase mb-8">
            In this panel you can express some preferences related to the
            processing of your personal information. YOU MAY REVIEW AND CHANGE
            EXPRESSED CHOICES AT ANY TIME BY RESURFACING THIS PANEL VIA THE
            PROVIDED LINK. TO DENY YOUR CONSENT TO THE SPECIFIC PROCESSING
            ACTIVITIES DESCRIBED BELOW, SWITCH THE TOGGLES TO OFF OR USE THE
            “REJECT ALL” BUTTON AND CONFIRM YOU WANT TO SAVE YOUR CHOICES.
          </p>

          {/* SECTION 1: STRICTLY NECESSARY */}
          <div className="border border-black/15">
            <span className="flex justify-between items-center py-3 px-3">
              <div className="flex items-center gap-2" onClick={toggle1}>
                <img
                  className="w-4 cursor-pointer"
                  src={
                    foot
                      ? "/icons8-down-arrow-64 (1).png"
                      : "/icons8-down-arrow-64.png"
                  }
                />
                <h1 className="font-bold text-[13px] sm:text-[14px]">
                  STRICTLY NECESSARY
                </h1>
              </div>
              <img
                className="w-8 sm:w-9 opacity-50 cursor-not-allowed"
                src="off-button.png"
              />
            </span>

            {foot && (
              <div className="border-t border-black/10">
                <p className="text-[13px] sm:text-[14px] text-black/65 uppercase py-4 px-3">
                  Essential cookies that cannot be disabled.
                </p>
                <p className="font-bold text-[12px] uppercase py-2 px-3 border-t border-black/10">
                  COOKIE TABLE
                </p>

                {/* Desktop Header */}
                <div className="hidden sm:flex font-bold text-[12px] border-t border-dashed border-black/10 py-2 px-3">
                  <p className="w-[200px]">COOKIE</p>
                  <p className="w-[140px]">DOMAIN</p>
                  <p className="flex-1">DESCRIPTION</p>
                </div>

                {/* Strictly Necessary Rows */}
                {[
                  ["SWELL-SESSION", "YEEZY.COM", "Linking you to your cart"],
                  ["CC_COOKIE", "YEEZY.COM", "Tracking consent"],
                ].map(([a, b, c], i) => (
                  <div
                    key={i}
                    className="border-t border-black/10 py-3 px-3 uppercase text-[11px] sm:text-[12px]"
                  >
                    <div className="flex flex-col gap-1 sm:hidden">
                      {" "}
                      {/* Mobile Stacked */}
                      <div className="flex">
                        <span className="w-24 font-bold shrink-0">COOKIE</span>
                        <span>{a}</span>
                      </div>
                      <div className="flex">
                        <span className="w-24 font-bold shrink-0">DOMAIN</span>
                        <span>{b}</span>
                      </div>
                      <div className="flex">
                        <span className="w-24 font-bold shrink-0">
                          DESCRIPTION
                        </span>
                        <span className="flex-1">{c}</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex">
                      {" "}
                      {/* Desktop Row */}
                      <p className="w-[200px]">{a}</p>
                      <p className="w-[140px]">{b}</p>
                      <p className="flex-1">{c}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECTION 2: TARGETED ANALYTICS */}
          <div className="border border-black/15 mt-4">
            <span className="flex justify-between items-center py-3 px-3">
              <div className="flex items-center gap-2" onClick={toggle2}>
                <img
                  className="w-4 cursor-pointer"
                  src={
                    foot2
                      ? "/icons8-down-arrow-64 (1).png"
                      : "/icons8-down-arrow-64.png"
                  }
                />
                <h1 className="font-bold text-[13px] sm:text-[14px]">
                  TARGETED ANALYTICS
                </h1>
              </div>
              <img
                onClick={toggle}
                className="w-8 sm:w-9 cursor-pointer"
                src={on ? "/icons8-toggle-on-50.png" : "/off-button.png"}
              />
            </span>

            {foot2 && (
              <div className="border-t border-black/10">
                <p className="font-bold text-[12px] uppercase py-2 px-3">
                  COOKIE TABLE
                </p>

                {/* Desktop Header */}
                <div className="hidden sm:flex font-bold text-[12px] border-t border-dashed border-black/10 py-2 px-3">
                  <p className="w-[200px]">COOKIE</p>
                  <p className="w-[140px]">DOMAIN</p>
                  <p className="flex-1">DESCRIPTION</p>
                </div>

                {/* Analytics Rows */}
                {analyticsCookies.map(([a, b, c], i) => (
                  <div
                    key={i}
                    className="border-t border-black/10 py-3 px-3 uppercase text-[11px] sm:text-[12px]"
                  >
                    <div className="flex flex-col gap-1 sm:hidden">
                      {" "}
                      {/* Mobile Stacked */}
                      <div className="flex">
                        <span className="w-24 font-bold shrink-0">COOKIE</span>
                        <span>{a}</span>
                      </div>
                      <div className="flex">
                        <span className="w-24 font-bold shrink-0">DOMAIN</span>
                        <span>{b}</span>
                      </div>
                      <div className="flex">
                        <span className="w-24 font-bold shrink-0">
                          DESCRIPTION
                        </span>
                        <span className="flex-1">{c}</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex">
                      {" "}
                      {/* Desktop Row */}
                      <p className="w-[200px]">{a}</p>
                      <p className="w-[140px]">{b}</p>
                      <p className="flex-1">{c}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MORE INFO */}
          <div className="border border-black/15 py-5 px-3 mt-6">
            <h1 className="font-bold mb-2 text-[13px] uppercase">
              MORE INFORMATION
            </h1>
            <p className="text-[12px] uppercase">
              Contact us for any queries regarding our cookie policy.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row gap-2 items-center justify-between px-4 py-4 border-t-2 border-black/15 bg-white">
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={backFunction6}
              className="flex-1 bg-black text-white font-bold text-[12px] px-4 py-3 cursor-pointer"
            >
              ACCEPT ALL
            </button>
            <button
              onClick={backFunction6}
              className="flex-1 bg-black text-white font-bold text-[12px] px-4 py-3 cursor-pointer"
            >
              REJECT ALL
            </button>
          </div>
          <button
            onClick={backFunction6}
            className="w-full sm:w-auto font-bold text-[12px] px-4 py-3 border cursor-pointer"
          >
            ACCEPT CURRENT SELECTION
          </button>
        </div>
      </div>
    </div>
  );
}
