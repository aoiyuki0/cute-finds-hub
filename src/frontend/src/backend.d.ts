import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type CategoryId = string;
export type ComparisonGroupId = string;
export type ProductId = string;
export interface ComparisonGroup {
    id: ComparisonGroupId;
    productIds: Array<ProductId>;
    name: string;
}
export interface Product {
    id: ProductId;
    title: string;
    comparisonGroup?: ComparisonGroupId;
    description: string;
    imageUrl: string;
    category: CategoryId;
    rating: number;
    priceHint: string;
}
export interface Category {
    id: CategoryId;
    name: string;
}
export interface backendInterface {
    getComparisonGroup(comparisonGroupId: ComparisonGroupId): Promise<ComparisonGroup>;
    getProduct(productId: ProductId): Promise<Product>;
    listCategories(): Promise<Array<Category>>;
    listComparisonGroups(): Promise<Array<ComparisonGroup>>;
    listProductsByCategory(categoryId: CategoryId): Promise<Array<Product>>;
}
