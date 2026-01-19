import { useEffect } from "react";
import { useCart } from "@/context/cartContext";
export default function PrivacyCom({ backFunction3 }) {
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
    <div className="w-full h-screen bg-white text-black fixed top-0 left-0 z-20 flex uppercase flex-col p-5">
      
      {/* Top navigation */}
      <div className="flex flex-row justify-between items-center mb-5">
        <img
          onClick={backFunction3}
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

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-2 max-w-3xl mx-auto font-mono text-[15px] leading-7 tracking-widest space-y-4 mb-10">
        <h1 className="text-xl font-bold uppercase">Privacy Policy</h1>
        <p>Last Updated: December 23, 2025</p>

        <p>
          INTRODUCTION: YEEZY, LLC ("WE," "US," OR "OUR") RESPECTS YOUR PRIVACY
          AND IS COMMITTED TO PROTECTING IT THROUGH OUR COMPLIANCE WITH THIS POLICY. 
          YEEZY, LLC IS THE DATA CONTROLLER RESPONSIBLE FOR YOUR PERSONAL INFORMATION.
        </p>

        <p>
          THIS POLICY DESCRIBES THE TYPES OF INFORMATION WE MAY COLLECT FROM YOU OR 
          THAT YOU MAY PROVIDE WHEN YOU VISIT OUR ONLINE, DIGITAL OR MOBILE SERVICES, 
          INCLUDING WWW.YEEZY.COM, APPLICATIONS, AND OTHER PRODUCTS OR SERVICES 
          (COLLECTIVELY, THE "SERVICE"), HOW WE USE AND PROTECT THAT INFORMATION, 
          AND YOUR RIGHTS REGARDING YOUR PERSONAL INFORMATION.
        </p>

        <p>
          BY ACCESSING OR USING THE SERVICE, YOU AGREE TO THIS PRIVACY POLICY. IF 
          YOU DO NOT AGREE, PLEASE DISCONTINUE USE OF THE SERVICE. WE MAY UPDATE THIS 
          PRIVACY POLICY PERIODICALLY AND WILL NOTIFY YOU OF MATERIAL CHANGES.
        </p>

        <h2 className="text-lg font-bold uppercase">Collecting Personal Information</h2>
        <p>
          WHEN YOU VISIT, ACCESS, OR USE THE SERVICE, WE COLLECT CERTAIN INFORMATION 
          ABOUT YOUR DEVICE, INTERACTIONS, AND NECESSARY INFORMATION TO PROCESS 
          PURCHASES. PERSONAL INFORMATION INCLUDES ANY DATA THAT CAN BE LINKED TO 
          YOU DIRECTLY OR INDIRECTLY.
        </p>

        <h2 className="text-lg font-bold uppercase">Device Information</h2>
        <p>
          Examples: Browser version, IP address, time zone, cookies, browsing behavior, 
          and interactions with products. Collected via cookies, tracking pixels, logs, 
          Google Analytics, Meta/Facebook Pixel, TikTok Pixel, Pinterest Pixel, Klaviyo, 
          and session replay tools (Hotjar, Lucky Orange). Used to improve service, 
          prevent fraud, and, with consent, for advertising.
        </p>

        <h2 className="text-lg font-bold uppercase">Order Information</h2>
        <p>
          Examples: Name, billing/shipping address, payment info, email, and phone number. 
          Collected during checkout or account creation. Used to fulfill orders, process 
          payments, detect fraud, communicate about orders, and send marketing messages.
        </p>

        <h2 className="text-lg font-bold uppercase">Customer Support</h2>
        <p>
          Examples: Name, email, order details, or other communications. Used to respond 
          to inquiries and provide assistance. Collected directly and shared with Zendesk.
        </p>

        <h2 className="text-lg font-bold uppercase">Sharing Personal Information</h2>
        <p>
          We share your data only with trusted service providers for order fulfillment, 
          payment processing, customer support, analytics, and advertising. We may also 
          share information when required by law.
        </p>

        <h2 className="text-lg font-bold uppercase">Marketing Communications</h2>
        <p>
          We use Klaviyo for email and SMS marketing (if opted in). You may opt-out anytime 
          by replying STOP, using unsubscribe links, or contacting us at contact@yeezy.com. 
          Message and data rates may apply.
        </p>

        <h2 className="text-lg font-bold uppercase">Behavioral Advertising</h2>
        <p>
          We use personal information for targeted ads. You can opt-out via platform-specific 
          tools (Facebook, Google, TikTok, Pinterest) or Digital Advertising Alliance.
        </p>

        <h2 className="text-lg font-bold uppercase">Lawful Basis (GDPR)</h2>
        <p>
          If in EEA or UK, you may access, correct, delete, restrict processing, request data 
          portability, or object to automated decision-making. Consent can be withdrawn anytime.
        </p>

        <h2 className="text-lg font-bold uppercase">CCPA (California Residents)</h2>
        <p>
          You may access, delete, correct, and opt-out of the sale or sharing of your personal 
          information. Submit requests via email at contact@yeezy.com.
        </p>

        <h2 className="text-lg font-bold uppercase">Children’s Privacy</h2>
        <p>
          We do not knowingly collect information from children under 13 (COPPA) or sell/share 
          info of minors under 16 without proper consent. Parents can contact us to delete such 
          data.
        </p>

        <h2 className="text-lg font-bold uppercase">Retention</h2>
        <p>
          We retain personal information only as long as necessary for service or legal obligations, 
          typically 7 years for financial records. Data is securely deleted or anonymized when no 
          longer needed.
        </p>

        <h2 className="text-lg font-bold uppercase">Cookies</h2>
        <p>
          Cookies help remember preferences and track usage. Types include functional, performance, 
          advertising, and social media cookies. You can manage or disable cookies through your 
          browser, though it may affect functionality.
        </p>

        <h2 className="text-lg font-bold uppercase">Changes to Privacy Policy</h2>
        <p>
          Updates will be posted here. Material changes will be communicated via Service notifications 
          or email at least 30 days in advance where required by law.
        </p>

        <h2 className="text-lg font-bold uppercase">Contact Information</h2>
        <p>
          Email: contact@yeezy.com <br />
          Mail: Yeezy, LLC, 8025 Melrose Ave, Los Angeles, CA 90046
        </p>
      </div>
    </div>
  );
}