import { produce } from 'immer';
import { Item } from '../../interfaces/Item';
import { TodoActionTypes } from '../actions/todoActions';
import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM } from '../types/types';

type TodoState = Item[];

const todoReducer = (state: TodoState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_ITEM:
      return produce(state, (draft) => {
        if (action.name) {
          draft.push({ name: action.name, isCompleted: false });
        }
      });
    case TOGGLE_ITEM:
      return produce(state, (draft) => {
        draft[action.index].isCompleted = !draft[action.index].isCompleted;
      });
    case DELETE_ITEM:
      return produce(state, (draft) => {
        draft.splice(action.index, 1);
      });
    default:
      return state;
  }
};

export default todoReducer;
