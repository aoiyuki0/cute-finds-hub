import { useQuery } from "@tanstack/react-query";
import type { Category, ComparisonGroup, Product } from "../backend";
import { useActor } from "./useActor";

export function useCategories() {
  const { actor, isFetching } = useActor();

  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProductsByCategory(categoryId?: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      if (!actor || !categoryId) return [];
      return actor.listProductsByCategory(categoryId);
    },
    enabled: !!actor && !isFetching && !!categoryId,
  });
}

export function useProduct(productId?: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: async () => {
      if (!actor || !productId) throw new Error("Product ID required");
      return actor.getProduct(productId);
    },
    enabled: !!actor && !isFetching && !!productId,
  });
}

export function useComparisonGroups() {
  const { actor, isFetching } = useActor();

  return useQuery<ComparisonGroup[]>({
    queryKey: ["comparisonGroups"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listComparisonGroups();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useComparisonGroup(groupId?: string) {
  const { actor, isFetching } = useActor();

  return useQuery<ComparisonGroup>({
    queryKey: ["comparisonGroup", groupId],
    queryFn: async () => {
      if (!actor || !groupId) throw new Error("Group ID required");
      return actor.getComparisonGroup(groupId);
    },
    enabled: !!actor && !isFetching && !!groupId,
  });
}
