import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodoItem } from '../../types/types';

import { v4 as uuidv4 } from "uuid";
import { RootState } from '../../app/store';

interface ITodoState {
    todosList: ITodoItem[],
}

const initialState: ITodoState = {
    todosList: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<ITodoItem>) => {
                state.todosList.push(action.payload);
            },
            prepare: (description: string ) => ({
                payload: {
                  id: uuidv4(),
                  description,
                  isCompleted: false,
                } as ITodoItem,
            }),
        },
        toggleTodoItemState(state, action: PayloadAction<{ id: string }>) {
            state.todosList = state.todosList.map((item) => {          
                return item.id === action.payload.id ? { ...item, isCompleted: !item.isCompleted } : item;
            })
        },
        removeTodo(state, action: PayloadAction<{ id: string }>){
            state.todosList = state.todosList.filter((item) => item.id !== action.payload.id);
        },
        updateTodo(state, action: PayloadAction<{ id: string, description: string }>){
            const todoDescription = action.payload.description;
            
            state.todosList = state.todosList.map((item) => {      
                return item.id === action.payload.id ? { ...item, description: todoDescription } : item;
            })
        },
    },
})

export const selectTodos = (state: RootState) => state.todos.todosList;

export const { addTodo, removeTodo, updateTodo, toggleTodoItemState } = todoSlice.actions;
export default todoSlice.reducer;
