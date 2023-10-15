import { useRef, useState } from 'react';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  const handleAddTodo = ()=>{
    if(inputRef.current.value !== ""){
      const text = inputRef.current.value;
      const newItem = {completed:false, text}
      // console.log(text);
      setTodos([...todos, newItem])
      inputRef.current.value = "";
    }
  }
  const handelItemDone = (index)=>{
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  const handleDeleteItem = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  if(todos.length === 0){
    var message = true
  }
  console.log(todos);
  return (
    <div className="App">
      <h1 className='title-todo'> To Do List </h1>
      <div className="message">
      {message ? "add to task..?" : ""}
      </div>
      <div className="to-do-container">
      <ul>
        {todos.map(({text, completed},index)=>{
          return (
          <div className='add-to-do-list' key={index}>
            <li className={completed ? "done" : ""} onClick={()=> handelItemDone(index)}>
            {text} </li>
            <span onClick={()=>handleDeleteItem(index)}>
              {completed ? "✔️" : "❌"  }
            </span>
          </div>
          ) 
        })}
      </ul>
      <input type="text" ref={inputRef} placeholder="Add To Task..." />
      <button onClick={handleAddTodo}>Add</button>
      </div>
      </div>
  );
}

export default App;
