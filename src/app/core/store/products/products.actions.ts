import { createActionGroup } from '@ngrx/store';
import { IResponse } from '../../models/ApiResponse';
import { ICreateProduct, IProductDetails, IUpdateProduct } from '../../../modules/home/models/IProduct.interface';
export const productActions = createActionGroup({
  source: 'Product',
  events: {

    changeItemsPerPage: (ItemsPerPage: number) => ({ ItemsPerPage }),
    changePageIndex: (pageIndex: number) => ({ pageIndex }),
    changeCurrentPage: (CurrentPage: number) => ({ CurrentPage }),

    getProducts: (param?: any) => ({ ...param ?? {} }),
    getProductsSuccess: (data: IResponse<IProductDetails[]>) => ({ data }),
    getProductsFailure: (errors: string[]) => ({ errors }),

    addProduct: (createProduct: ICreateProduct) => ({ createProduct }),
    addProductSuccess: (createProduct: ICreateProduct) => ({ createProduct }),
    addProductFailure: (errors: string[]) => ({ errors }),

    updateProduct: (updateProduct: IUpdateProduct, param: any) => ({ updateProduct, param }),
    updateProductSuccess: (updateProduct: any) => ({ updateProduct }),
    updateProductFailure: (errors: string[]) => ({ errors }),

    deleteProduct: (param: any) => ({ ...param }),
    deleteProductSuccess: (id: number) => ({ id }),
    deleteProductFailure: (errors: string[]) => ({ errors }),

    getProductDetails: (param: any) => ({ param }),
    getProductDetailsSuccess: (ProductDetails: IProductDetails) => ({ ProductDetails }),
    getProductDetailsFailed: (errors: string[]) => ({ errors }),

  },
});
