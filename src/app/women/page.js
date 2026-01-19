"use client";

import { useState, useEffect } from "react";
import cloths from "@/data-sources/all-product";
import SectionOverview from "@/component/sectionOverview";
import { useGrid } from "@/context/gridContext";

export default function WomenPage() {
  const selectedNames = [
    "BR-09","TT-04","TT-02","BD-03","TS-04","LS-04","WJ-02","BD-10","BD-04",
    "WJ-01","UW-02","SH-06","LG-13","LG-14","LG-01","LG-04","PT-10",
    "HL-01","HL-02","HL-03","HB-01"
  ];

  const [section, setSection] = useState(null);
  const { isThreeCols } = useGrid();

  const selectedProducts = cloths.filter(product =>
    selectedNames.includes(product.name)
  );

   useEffect(() => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}, []);

  return (
    <div>
      <ul
        className={`grid gap-5 px-5 mt-16 mb-10 transition-all duration-300
          ${
            isThreeCols
              ? "grid-cols-1 lg:grid-cols-3"  // 📱 1 | 💻 3
              : "grid-cols-2 lg:grid-cols-6"  // 📱 2 | 💻 6
          }
        `}
      >
        {selectedProducts.map((product, index) => (
          <li
            key={`${product.name}-${product.image}-${index}`}
            className="flex flex-col items-center"
          >
            <img
              src={product.image}
              onClick={() => setSection(product)}
              className="cursor-pointer w-full object-contain"
              alt={product.name}
            />
            <h1 className="text-center text-md font-mono">
              {product.name}
            </h1>
          </li>
        ))}
      </ul>

      {section && (
        <SectionOverview
          category="women"
          first={section}
          back={() => setSection(null)}
        />
      )}
    </div>
  );
}