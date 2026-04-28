import { useMemo, useState } from "react";
import { seedProducts } from "../data/seedProducts";
import type { CategoryId } from "../types/product";

export function useFilteredProducts() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">(
    "all",
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return seedProducts;
    }
    return seedProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  return {
    products: filteredProducts,
    selectedCategory,
    setSelectedCategory,
  };
}
