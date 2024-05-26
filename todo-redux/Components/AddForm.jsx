import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [todo, setTodo] = useState("");
  const dispatch=useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(todo));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          value={todo}
          onChange={(e) => setTodo(e.target.value)} 
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
