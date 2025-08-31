import './App.css';
import TodoApp from './containers/TodoApp';
import Title from './components/Title';

function App(): JSX.Element {
  const title = "Todo List";

  return (
    <div className="app">
      <Title title={title}/>


    </div>
  );
}

export default App;
