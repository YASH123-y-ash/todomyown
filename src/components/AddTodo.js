import React, { useState } from "react";

function AddTodo(props) {
  const [todoTask, settodoTask] = useState({ task: "", completed: false });

  const updateTodo = (event) => {
    settodoTask({
      ...todoTask,
      [event.target.name]: event.target.value,
    });
  };
  const editTodoWithIndex = (event) => {
    props.seteTodoTask({
      ...props.eTodoTask,
      [event.target.name]: event.target.value,
    });
  };
  const addTodo = () => {
    props.getTodo(todoTask);
    settodoTask({
      ...todoTask,
      task: "",
    });
  };
  const addTodoAfterEdit = () => {
    props.getTodoAfterEdit(props.eTodoTask);
    props.seteIndex(null);
  };
  console.log(todoTask);
  console.log(props.eIndex);
  console.log(props.eTodoTask);
  return (
    <div>
      {props.eIndex >= 0 && props.eIndex != null ? (
        <div>
          <input
            type="text"
            name="task"
            value={props.eTodoTask.task}
            onChange={editTodoWithIndex}
          />
          <button onClick={addTodoAfterEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="task"
            value={todoTask.task}
            onChange={updateTodo}
          />
          <button onClick={addTodo}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default AddTodo;
