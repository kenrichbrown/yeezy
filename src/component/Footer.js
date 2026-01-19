"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ContactCom from "./contact";
import TermsCom from "./terms";
import PrivacyCom from "./policies";
import Access from "./accessibilty";
import Dnsmpi from "./dnsmpi";
import Cookies from "./cookies";

export default function NavbarComponents() {
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActive("");
  }, [pathname]);

  return (
    <div>
      <ul
        className="
          flex justify-evenly
          px-4
          text-[10px]
          font-mono text-black/60
          mt-7 mb-10 tracking-tighter

          lg:justify-center
          lg:gap-10
          lg:text-sm
          lg:px-0
        "
      >
        <li onClick={() => setActive("contact")} className="cursor-pointer">
          CONTACT
        </li>
        <li onClick={() => setActive("terms")} className="cursor-pointer">
          TERMS
        </li>
        <li onClick={() => setActive("privacy")} className="cursor-pointer">
          PRIVACY
        </li>
        <li onClick={() => setActive("access")} className="cursor-pointer">
          ACCESSIBILITY
        </li>
        <li onClick={() => setActive("dnsmpi")} className="cursor-pointer">
          DNSMPI
        </li>
        <li onClick={() => setActive("cookies")} className="cursor-pointer">
          COOKIES
        </li>
      </ul>

      {active === "contact" && <ContactCom backFunction={() => setActive("")} />}
      {active === "terms" && <TermsCom backFunction2={() => setActive("")} />}
      {active === "privacy" && <PrivacyCom backFunction3={() => setActive("")} />}
      {active === "access" && <Access backFunction4={() => setActive("")} />}
      {active === "dnsmpi" && <Dnsmpi backFunction5={() => setActive("")} />}
      {active === "cookies" && <Cookies backFunction6={() => setActive("")} />}
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import ContactCom from "./contact";
// import TermsCom from "./terms";
// import PrivacyCom from "./policies";
// import Access from "./accessibilty";
// import Dnsmpi from "./dnsmpi";

// export default function () {
//   const [first, setFirst] = useState(false);
//   const [second, setSecond] = useState(false);
//   const [third, setThird] = useState(false);
//   const [fourth, setFourth] = useState(false);
//   const [fifth, setFifth] = useState(false);

//   function toggleFirst() {
//     setFirst(true);
//   }
//   function toggleSecond(){
//     setSecond(true);
//   }
//   function toggleThird (){
//     setThird(true);
//   }
//   function toggleFourth(){
//     setFourth(true);
//   }
//   function toggleFifth(){
//     setFifth (true);
//   }

//   return (
//     <div>
//       <ul className="flex justify-center gap-10 text-sm font-mono text-black/60 mt-7 mb-10 tracking-wide">
//         <li onClick={toggleFirst} className="cursor-pointer">CONTACT</li>
//         {first && <ContactCom backFunction={() => setFirst(false)} />}
//         <li onClick={toggleSecond} className="cursor-pointer">TERMS</li>
//         {second && <TermsCom backFunction2 ={()=> setSecond (false)}/>}
//         <li onClick={toggleThird} className="cursor-pointer">PRIVACY</li>
//         {third && <PrivacyCom backFunction3={() => setThird(false)} />}
//         <li onClick={toggleFourth} className="cursor-pointer">ACCESSIBILITY</li>
//         {fourth && <Access backFunction4 ={() => setFourth (false)} />}
//         <li onClick={toggleFifth}>DNSMPI</li>
//         {fifth && <Dnsmpi backFunction5 ={() => setFifth (false)} />}
//         <li>COOKIES</li>
//       </ul>
//     </div>
//   );
// }
