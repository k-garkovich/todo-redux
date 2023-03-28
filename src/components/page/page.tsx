import { AddTodo, TodoList } from "../todo-items";

export const TodoPage = () => (
    <div className='container'>
        <div className='page-content'>
            <h1>TODO</h1>
            <div>
                <AddTodo /> 
                <TodoList />
            </div>
        </div>
    </div>
);
