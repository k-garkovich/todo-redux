import { FC, useState } from "react";

import { ITodoItem } from "../../types/types";
import { useAppDispatch } from "../../app/hooks";
import { removeTodo, updateTodo, toggleTodoItemState } from "../../features/reducer/todo-slice";


export const TodoItem: FC<ITodoItem> = ({id, description, isCompleted}) => {
  const dispatch = useAppDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [newDescription, setNewDescription] = useState<string>('');

  const onChange = () => {
    dispatch(toggleTodoItemState({id}))
  };

  const removeItem = () => {
    dispatch(removeTodo({id}))
  };

  const onUpdate = () => {
    dispatch(updateTodo({id, description: newDescription}));
    setIsUpdate(false);
  };  
  
  return (
    <div className="todo-item-container">
      {isUpdate ? (
        <div className="update-todo-container">
          <textarea 
            defaultValue={newDescription || description} 
            cols={30} 
            rows={5} 
            onChange={(e) => setNewDescription(e.target.value)}  
            data-testid='description'
          />
          <button className="button" onClick={onUpdate} data-testid='save-button'>Save</button>
        </div>
      ) : (
        <>
          <div>
            <input className="todo-checkbox" type={'checkbox'} onChange={onChange} checked={isCompleted} data-testid='checkbox' />
            {description}
          </div>
          <div>
            <button className="button" onClick={() => setIsUpdate(true)} data-testid='edit-button'>Edit</button>
            <button className="button" onClick={removeItem} data-testid='remove-button'>Remove</button>
          </div>
        </>
      )}
    </div>
  );
};