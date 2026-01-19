"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGrid } from "@/context/gridContext";
import { useCart } from "@/context/cartContext";


const navLinks = [
  { name: "NEW", path: "/" },
  { name: "MEN", path: "/men" },
  { name: "WOMEN", path: "/women" },
];
const navLinks2 = [
  { name: "SLIDES", path: "/slides" },
  { name: "ACCESSORIES", path: "/accessories" },
];

export default function Nav() {
  const pathname = usePathname();
  const { toggleGrid, isThreeCols } = useGrid(); // 👈 read state
  const { setOpen, cart } = useCart();

  return (
    <nav className="flex flex-row justify-between items-center px-4 py-3 fixed top-0 z-10 w-full bg-white">
      
      {/* PLUS / BACK ICON */}
      <button
        onClick={toggleGrid}
        className="text-3xl font-extralight cursor-pointer select-none"
      >
        {isThreeCols ? "<" : "+"}
      </button>

      <div>
        <ul className="flex gap-5 text-md font-mono px-4">
          {navLinks.map((link) => (
            <li
              key={link.path}
              style={{
                color: pathname === link.path ? "black" : "rgba(0,0,0,0.3)",
              }}
              className="cursor-pointer"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex text-md font-mono gap-5 gap-x-4">
          {navLinks2.map((link) => (
            <li
              key={link.path}
              style={{
                color: pathname === link.path ? "black" : "rgba(0,0,0,0.3)",
              }}
              className="cursor-pointer"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

       <button onClick={() => setOpen(true)} className="relative">
      <img className="w-5" src="/icons8-shopping-bag-32.png" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
          {cart.length}
        </span>
      )}
    </button>
    
    </nav>
  );
}