export type CategoryId =
  | "tech"
  | "study-tools"
  | "desk-setup"
  | "hostel-essentials"
  | "fitness";

export interface ExtendedProduct {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  priceHint: string;
  amazonUrl: string;
  imageUrl: string;
  category: CategoryId;
  pros: string[];
  cons: string[];
  comparisonGroup?: string;
}

export interface CategoryInfo {
  id: CategoryId | "all";
  name: string;
  icon: string;
}

export interface ComparisonGroupInfo {
  id: string;
  name: string;
  productIds: string[];
}
