"use client";

import { useState } from "react";
import cloths from "@/data-sources/all-product";
import SectionOverview from "@/component/sectionOverview";
import { useGrid } from "@/context/gridContext";

const selectedNames = [
  "BK-01","JC-10","JC-11","SL-03","BL-01","SG-03","BP-02","PK-01","WD-02",
  "SL-01","CT-01","BG-03","TS-07","LS-03","RC-04","WP-02","JC-07","JC-09",
  "RC-03","BB-02","WD-01","WP-01","WB-04","BB-01","JC-04","TS-03",
  "TT-06","HD-10","JC-08","HT-05","BG-02","GL-01","YS-01","PT-05",
  "BX-01","HT-04","BG-01","SL-02","PD-01","HT-01","SG-01","SG-02",
  "BP-01","JC-03","TS-05","TS-01","WB-01","SH-01","SP-08","SP-09",
  "SK-01","TS-02","SP-01","SP-06"
];

export default function MenPage() {
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
              : "grid-cols-2 lg:grid-cols-6"   // 📱 2 | 💻 6
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
          category="men"
          first={section}
          back={() => setSection(null)}
        />
      )}
    </div>
  );
}