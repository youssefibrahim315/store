import { createReducer, on } from "@ngrx/store";
import { actions } from "../actions";
import { states } from "../state";
import { ActiveProductItemStore } from "../state/activeProductItem.state";

export const activeProductItemReducer = createReducer(
  states.initialActiveProductStore,on(actions.setActiveProductItem,(state, payload): ActiveProductItemStore => ({...state,productItem: payload.productItem})));
