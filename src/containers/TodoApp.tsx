import { useReducer, useState, useEffect } from 'react';
import todoReducer from '../reducers/todoReducer';
import produce from 'immer';
import Input from '../components/Input';
import Items from '../components/Items';
import { MOCK_ITEMS as initialState } from '../mockData';

function TodoApp() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    setItems(initialState);
  }, []);



  const addItem = (inputValue) => setItems(produce(items, draft => {
    if (inputValue) {
      draft.push({ name: inputValue, isCompleted: false});
    }
  }));

  // const toggleItem = (index) => {
  //   setItems([
  //     ...items.map((v, i) =>
  //       i === index ? { ...v, isCompleted: !v.isCompleted } : v
  //     ),
  //   ]);
  // };

  const toggleItem = (index) => {
    setItems(produce(items, draft => {
      draft[index].isCompleted = !draft[index].isCompleted
    }));
  };

  // const deleteItem = (index) => {
  //   setItems([...items.filter((v, i) => i !== index)]);
  // };

  const deleteItem = (index) => setItems(produce(items, draft => {
    draft.splice(index, 1);
  }));



  // const [items, dispatch] = useReducer(todoReducer, initialState);

  // const addItem = (inputValue) => {
  // dispatch({ type: 'ADD_ITEM', inputValue });
  // };

  // const toggleItem = (index) => {
  //   dispatch({ type: 'TOGGLE_ITEM', index });
  // };

  // const deleteItem = (index) => {
  //   dispatch({ type: 'DELETE_ITEM', index });
  // };

  return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
            <Input onAdd={addItem}></Input>
            <Items
              items={items}
              onToggle={toggleItem}
              onDelete={deleteItem}
            ></Items>
          </div>
        </div>
      </div>
  );
}

export default TodoApp;
