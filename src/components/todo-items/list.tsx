import { useAppSelector } from '../../app/hooks';
import { selectTodos } from '../../features/reducer/todo-slice';
import { TodoItem } from './item';

export const TodoList = () => {
  const todosList = useAppSelector(selectTodos);

  return (
    <div>
      <h3>TODO list</h3>
      {todosList.map((item) => <TodoItem key={item.id} id={item.id} description={item.description} isCompleted={item.isCompleted} />)}
    </div>
  );
};
