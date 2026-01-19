"use client";

import { createContext, useContext, useState } from "react";

const GridContext = createContext();

export function GridProvider({ children }) {
  const [isThreeCols, setIsThreeCols] = useState(false);

  const toggleGrid = () => {
    setIsThreeCols((prev) => !prev);
  };

  return (
    <GridContext.Provider value={{ isThreeCols, toggleGrid }}>
      {children}
    </GridContext.Provider>
  );
}

export function useGrid() {
  return useContext(GridContext);
}