"use client";

import { useState } from "react";
import cloths from "@/data-sources/all-product";
import SectionOverview from "@/component/sectionOverview";
import { useGrid } from "@/context/gridContext";

export default function SlidesOverview() {
  const selectedNames = ["YS-01", "YS-02", "YS-03", "YS-04", "YS-05", "YS-08"];
  const [section, setSection] = useState(null);
  const { isThreeCols } = useGrid();

  const selectedProducts = cloths.filter(product =>
    selectedNames.includes(product.name)
  );

  return (
    <div>
      <ul
        className={`grid gap-5 px-5 mt-16 mb-10 transition-all duration-300
          ${
            isThreeCols
              ? "grid-cols-1 lg:grid-cols-3"   // 📱 1 | 💻 3
              : "grid-cols-2 lg:grid-cols-5"   // 📱 2 | 💻 5
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
          category="slides"
          first={section}
          back={() => setSection(null)}
        />
      )}
    </div>
  );
}