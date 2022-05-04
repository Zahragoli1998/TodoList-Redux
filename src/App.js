
import './App.css';
import ToDoList from './components/ToDoList';
import {Provider} from "react-redux"
import Store from './components/redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <ToDoList/>
      </div>
    </Provider>
  );
}

export default App;
