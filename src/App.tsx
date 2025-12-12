import TodoApp from './containers/TodoApp';
import Title from './components/Title';

function App(): JSX.Element {
  const title = 'Todo List';

  return (
    <div>
      <Title title={title} />
      <TodoApp />
    </div>
  );
}

export default App;
