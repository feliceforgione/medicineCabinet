import { Image } from "./Image";

export interface Product {
  _id: string;
  title: string;
  brand: string;
  manufacturer: string;
  ratings: number;
  price: number;
  images: Image[];
  description_full_html: string;
  in_stock: boolean;
}
