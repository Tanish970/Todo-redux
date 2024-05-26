import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { markasDone } from "../features/todo/todoSlice";

export default function Todo() {
  let todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const clickHandler1=(id)=>{
    dispatch(markasDone(id))
  }

  return (
    <>
      <AddForm />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>delete</button> 
            <button
              onClick={() => clickHandler1(todo.id)} 
              style={{ 
                backgroundColor: todo.isDone ? 'green' : '',
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
