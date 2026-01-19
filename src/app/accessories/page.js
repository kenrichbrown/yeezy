"use client";

import { useState, useEffect } from "react";
import cloths from "@/data-sources/all-product";
import SectionOverview from "@/component/sectionOverview";
import { useGrid } from "@/context/gridContext";

export default function AccessoriesPage() {
  const selectedNames = [
    "SG-03","BP-02","BG-01","HT-05","BG-02","GL-01",
    "HT-04","WH-01","BT-01","HT-01","SG-01","SG-02","BP-01"
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
          category="accessories"
          first={section}
          back={() => setSection(null)}
        />
      )}
    </div>
  );
}