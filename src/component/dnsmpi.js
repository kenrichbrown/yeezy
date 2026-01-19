import { useEffect } from "react";
import { useState } from "react";

export default function ContactPage({ backFunction5 }) {

  const [on, onSet] = useState(false);

  function handleCheckboxChange() {
    onSet(!on);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white text-black fixed top-0 left-0 z-20 flex flex-col">
      
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-5 sm:p-5">
        <img
          onClick={backFunction5}
          className="w-5 cursor-pointer"
          src="/icons8-back-50 (1).png"
          alt="Back"
        />
        <img
        onClick={handleCheckboxChange}
          className="w-5 cursor-pointer"
          src="/icons8-shopping-bag-32.png"
          alt="Cart"
        />
      </div>

        {on && (
          <span className="absolute top-5.5 right-12 font-mono text-black text-[12px] font-bold">
            YZY WALLET
          </span>
        )}

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 pb-10 sm:px-5">

        {/* INTRO TEXT */}
        <div className="max-w-2xl mx-auto font-mono text-[14px] sm:text-[17px] leading-6 sm:leading-7 tracking-widest space-y-4 mt-8 sm:mt-10">
          <p>
            You can use this form to exercise your privacy rights under the
            California Consumer Privacy Act (CCPA) and the General Data
            Protection Regulation (GDPR).
          </p>

          <p>
            To protect the disclosure of your personal information, we may need
            additional details to verify your identity before processing your
            request.
          </p>

          <p>
            If you have multiple requests, please note that you will need to
            submit a separate form for each request.
          </p>

          <p className="text-sm">
            <strong>*</strong> Indicates required fields.
          </p>
        </div>

        {/* FORM */}
        <div
          className="
            max-w-2xl mx-auto mt-10
            grid grid-cols-1 sm:grid-cols-2
            gap-3 font-mono
          "
        >
          {/* FIRST NAME */}
          <div className="flex flex-col">
            <label className="text-[13px] sm:text-[15px] tracking-widest mb-1">
              FIRST NAME *
            </label>
            <input className="border py-4 text-black text-sm px-3 outline-0" />
          </div>

          {/* LAST NAME */}
          <div className="flex flex-col">
            <label className="text-[13px] sm:text-[15px] tracking-widest mb-1">
              LAST NAME *
            </label>
            <input className="border py-4 text-black text-sm px-3 outline-0" />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col sm:col-span-2 mt-2">
            <label className="mb-2 text-[13px] sm:text-[15px] tracking-widest">
              EMAIL *
            </label>
            <input className="border py-4 text-black text-sm px-3 outline-0 w-full" />
          </div>

          {/* CONFIRM EMAIL */}
          <div className="flex flex-col sm:col-span-2 mt-5">
            <label className="mb-2 text-[13px] sm:text-[15px] tracking-widest">
              CONFIRM EMAIL *
            </label>
            <input className="border py-4 text-black text-sm px-3 outline-0 w-full" />

            {/* CAPTCHA */}
            <div className="border mt-7 px-4 py-3 flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="font-mono text-[11px] sm:text-[12px] tracking-wide">
                  Verify you are a human
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-black/60">
                  Protected by
                </span>
                <img className="w-8" src="/download.png" alt="captcha" />
              </div>
            </div>

            {/* SUBMIT */}
            <button className="border py-4 mt-6 text-white bg-black w-full cursor-pointer hover:bg-black/70">
              SUBMIT MY REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}