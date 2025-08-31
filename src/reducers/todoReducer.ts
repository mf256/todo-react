import produce from 'immer';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return produce(state, draft => {
        if (action.inputValue) {
          draft.push({ name: action.inputValue, isCompleted: false });
        }
      });
    case 'TOGGLE_ITEM':
      return produce(state, draft => {
        draft[action.index].isCompleted = !draft[action.index].isCompleted;
      });
    case 'DELETE_ITEM':
      return produce(state, draft => {
        draft.splice(action.index, 1);
      });
    default:
      return state;
  }
};

export default todoReducer;