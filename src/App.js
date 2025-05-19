
import { useState } from 'react';
import './App.css';
import { TodoItem } from './components/Todoitem';


function App() {
  const [todos,setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const createTodo = () => {
    setTodos([...todos,{text:inputValue}])
    setInputValue("")
  }

  return (
    <div className="App">
      <div>
        <input type='text' 
        value={inputValue}
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}/>
        <button onClick={createTodo}>ADD</button>
      </div>
      <div>
        {
          todos.map((el,id)=>{
            return<TodoItem todo={el} key={id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
