import { useReducer } from 'react';
import todoReducer from '../store/reducers/todoReducer';
import AddItem from '../components/AddItem';
import Items from '../components/ItemsList';
import { MOCK_ITEMS as initialState } from '../mockData';
import { addItem, deleteItem, toogleItem } from '../store/actions/todoActions';

function TodoApp(): JSX.Element {
  const [items, dispatch] = useReducer(todoReducer, initialState);

  const handleAddItem = (name: string) => {
    dispatch(addItem(name));
  };

  const handleToggleItem = (index: number) => {
    dispatch(toogleItem(index));
  };

  const handleDeleteItem = (index: number) => {
    dispatch(deleteItem(index));
  };

  return (
    <div className="container mx-auto ">
      <div className="grid place-items-center">
        <div className="w-4/12">
          <AddItem onAdd={handleAddItem}></AddItem>
          <Items items={items} onToggle={handleToggleItem} onDelete={handleDeleteItem}></Items>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
