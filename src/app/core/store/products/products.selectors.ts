import { createSelector } from '@ngrx/store';

import {
  IProductState,
  selectCurrentPage,
  selectData,
  selectItemsPerPage,
  selectTotalCount,
  selectTotalPages,
} from './products.reducers';


export const selectPaginationInfo = createSelector(
  selectCurrentPage,
  selectItemsPerPage,
  (currentPage,itemsPerPage) => ({
    currentPage,
    itemsPerPage  })
);

export const selectProducts = createSelector(
  selectData,
  selectCurrentPage,
  selectTotalCount,
  selectTotalPages,
  selectItemsPerPage,
  (data, currentPage, totalCount, totalPages, itemsPerPage) => ({
    data,
    currentPage,
    totalCount,
    totalPages,
    itemsPerPage,    
  })
);
