import { ITodoItem } from "../../types/types";

export interface ITodoState {
    todosList: ITodoItem[],
}

export const initialState: ITodoState = {
    todosList: [
        {
            id: '1',
            description: 'Task 1',
            isCompleted: false,
        },
        {
            id: '2',
            description: 'Task 2',
            isCompleted: true,
        },
        {
            id: '3',
            description: 'Task 3',
            isCompleted: true,
        },
        {
            id: '4',
            description: 'Task 4',
            isCompleted: true,
        }
    ]
};
