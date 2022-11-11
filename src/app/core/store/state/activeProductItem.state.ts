import { product } from "src/app/modules/products/models/product.interface";

export interface ActiveProductItemStore {
  productItem: product | null;
}

export const initialActiveProductStore: ActiveProductItemStore = {
  productItem: null,
};
