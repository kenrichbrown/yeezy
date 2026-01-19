"use client";

import { useState } from "react";
import cloths from "@/data-sources/all-product";
import SectionOverview from "@/component/sectionOverview";
import { useGrid } from "@/context/gridContext";

export default function AllProductsPage() {
  const [section, setSection] = useState(null);
  const { isThreeCols } = useGrid();

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
        {cloths.map((product, index) => (
          <li
            key={`${product.name}-${product.image}-${index}`}
            className="flex flex-col items-center"
          >
            <img
              src={product.image}
              onClick={() => setSection(product)}
              className="cursor-pointer w-full h-60 object-contain mb-2"
              alt={product.name}
            />
            <h2 className="text-center text-md font-mono">
              {product.name}
            </h2>
          </li>
        ))}
      </ul>

      {section && (
        <SectionOverview
          category="all"
          first={section}
          back={() => setSection(null)}
        />
      )}
    </div>
  );
}