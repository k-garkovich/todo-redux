import { initialState } from './initial-state';
import todoReducer, { addTodo, removeTodo, updateTodo, toggleTodoItemState } from './todo-slice';

describe('todo reducer', () => {
  it('should handle initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should add todo', () => {
    const actual = todoReducer(initialState, addTodo('Task 5'));

    expect(actual.todosList.length).toEqual(5);
  });

  it('should remove todo', () => {
    const actual = todoReducer(initialState, removeTodo({id: '1'}));

    expect(actual.todosList.length).toEqual(3);
  });

  it('should update todo', () => {
    const actual = todoReducer(initialState, updateTodo({id: '3', description: 'Task 321'}));
    const currentTodo = actual.todosList.find((item) => item.id == '3');

    expect(currentTodo?.description).toEqual('Task 321');
  });

  it('should toggle todo state', () => {
      const actual = todoReducer(initialState, toggleTodoItemState({id: '4'}));
      const currentTodo = actual.todosList.find((item) => item.id == '4');

      expect(currentTodo?.isCompleted).toEqual(false);
    });
});
