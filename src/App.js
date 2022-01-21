import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoApp from "./components/TodoApp";dgnfg

function App() {
  const [todoArr, settodoArr] = useState([]);
  const [eTodoTask, seteTodoTask] = useState({
    task: "",
    completed: false,
  });
  const [eIndex, seteIndex] = useState(null);
  const getTodo = (todo) => {
    const todoArrCopy = [...todoArr];
    todoArrCopy.push(todo);
    settodoArr(todoArrCopy);
  };
  const getTodoAfterEdit = (editedTodo) => {
    console.log(editedTodo);
    const todoArrCopy = [...todoArr];
    todoArrCopy.splice(eIndex, 1, editedTodo);
    settodoArr(todoArrCopy);
  };
  const getEditTodo = (eTodo) => {
    console.log(eTodo);
    console.log("index of eTodo", todoArr.indexOf(eTodo));
    seteIndex(todoArr.indexOf(eTodo));
    seteTodoTask({
      ...eTodoTask,
      task: eTodo.task,
      completed: eTodo.completed,
    });
  };
  console.log(eIndex);
  console.log(todoArr);
  return (
    <div className="App">
      <AddTodo
        getTodo={getTodo}
        eIndex={eIndex}
        seteIndex={seteIndex}
        todoArr={todoArr}
        eTodoTask={eTodoTask}
        seteTodoTask={seteTodoTask}
        getTodoAfterEdit={getTodoAfterEdit}
      />
      <TodoApp
        todoArr={todoArr}
        settodoArr={settodoArr}
        getEditTodo={getEditTodo}
      />
    </div>
  );
}

export default App;
