import { createAction, props } from '@ngrx/store';
import { product } from 'src/app/modules/products/models/product.interface';

export enum ActiveProductItemActionsEnum {
  getAllProducts = '[getAllProducts] AllProduct',
  SetActiveProductItem = '[ActiveProductItem] SetActiveProductItem',
  RemoveActiveProductItem = '[ActiveProductItem] RemoveActiveProductItem',
}

export const getAllProducts = createAction(ActiveProductItemActionsEnum.getAllProducts,props<{ productItem: product[] }>());

export const setActiveProductItem = createAction(ActiveProductItemActionsEnum.SetActiveProductItem,props<{ productItem: product }>());

export const RemoveActiveProductItem = createAction(ActiveProductItemActionsEnum.RemoveActiveProductItem,props<{ productItem: product }>());
