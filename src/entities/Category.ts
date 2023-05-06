export interface Category {
  _id: string;
  name: string;
  slug?: string;
  productIds: string[];
  icon: string;
}
