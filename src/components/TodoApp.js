import React from "react";
import "./TodoApp.css";

function TodoApp({ todoArr, settodoArr, getEditTodo }) {
  const deleteTodoTask = (i) => {
    console.log(i);
    const todoArrCopy = [...todoArr];
    todoArrCopy.splice(i, 1);
    settodoArr(todoArrCopy);
  };
  const completedTodoTask = (i) => {
    console.log("completed task at index : ", i);
    const todoArrCopy = [...todoArr];
    todoArrCopy[i].completed = !todoArrCopy[i].completed;
    console.log(todoArrCopy);
    settodoArr(todoArrCopy);
  };
  const editTodoTask = (i) => {
    console.log(i);
    const todoArrCopy = [...todoArr];
    getEditTodo(todoArrCopy[i]);
  };
  return (
    <div>
      {todoArr.map((obj, index) => {
        return (
          <div key={index}>
            <span className={obj.completed ? "lineThrough" : "normal"}>
              {obj.task}
              <button onClick={() => deleteTodoTask(index)}>delete</button>
              <button onClick={() => completedTodoTask(index)}>
                Toggle Completed
              </button>
              <button onClick={() => editTodoTask(index)}>Edit</button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TodoApp;
