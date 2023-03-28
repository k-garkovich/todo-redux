import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";

import { addTodo } from "../../features/reducer/todo-slice";

export const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState<string>('');

  const onClick = () => {
    dispatch(addTodo(description));
    setDescription('');
  }
  
  return (
    <div className="add-todo-container">
      <div className="add-new-todo">
        <p>Add new todo</p>
        <button className="button" onClick={onClick}>Add</button>
      </div>
      <textarea cols={30} rows={5} onChange={(e) => setDescription(e.target.value)}/>
    </div>
  );
};
