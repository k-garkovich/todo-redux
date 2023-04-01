import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "../../app/store";
import { TodoItem } from "./item";

const firstTaskMock = {
    id: '1',
    description: 'test_1',
    isCompleted: false,
}

describe('TodoItem', () => {
    it('should remove todo', () => {
        render(
            <Provider store={store}>
                <TodoItem {...firstTaskMock} />
            </Provider>
        )

        const removeTodoButton = screen.getByTestId('remove-button');

        userEvent.click(removeTodoButton);

        expect(removeTodoButton).not.toBeInTheDocument();
    });
    

    it('should update todo', async () => {
        render(
            <Provider store={store}>
                <TodoItem {...firstTaskMock} />
            </Provider>
        )

        const editTodoButton = screen.getByTestId('edit-button');

        userEvent.click(editTodoButton);

        const input = await screen.findByTestId('description');
        const saveButton = screen.getByTestId('save-button');
        
        fireEvent.change(input, { target: { value: 'Test description' } });
        userEvent.click(saveButton);

        expect(await screen.findByText('Test description')).toBeInTheDocument();
    });

    it('should toggle todo', () => {
        render(
            <Provider store={store}>
                <TodoItem {...firstTaskMock} />
            </Provider>
        )

        const checkbox = screen.getByRole('checkbox');
        
        fireEvent.change(checkbox, { target: { checked: true } });
    
        expect(checkbox).toBeChecked();
    });
});
