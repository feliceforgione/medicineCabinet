import { Image } from "./Image";

export interface Product {
  _id: string;
  title: string;
  brand: string;
  ratings: number;
  price: number;
  images: Image[];
}
