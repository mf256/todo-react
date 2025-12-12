import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM } from '../types/types';

export interface AddItemAction {
  type: typeof ADD_ITEM;
  name: string;
}

export const addItem = (name: string): AddItemAction => ({
  type: ADD_ITEM,
  name,
});

export interface ToogleItemAction {
  type: typeof TOGGLE_ITEM;
  index: number;
}

export const toogleItem = (index: number): ToogleItemAction => ({
  type: TOGGLE_ITEM,
  index,
});

export interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  index: number;
}

export const deleteItem = (index: number): DeleteItemAction => ({
  type: DELETE_ITEM,
  index,
});

export type TodoActionTypes = AddItemAction | DeleteItemAction | ToogleItemAction;
