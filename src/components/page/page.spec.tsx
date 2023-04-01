import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";

import { store } from "../../app/store";
import { TodoPage } from "./page"

describe('Page', () => {
    render(
        <Provider store={store}>
            <TodoPage />
        </Provider>
    )

    it('should add new todo', () => {
        const input =  screen.getByTestId('todo-description');
        const addTodoButton = screen.getByTestId('add-todo-button');

        fireEvent.change(input, { target: { value: 'Test description' } });
        fireEvent.click(addTodoButton);

        expect(screen.getByText('Test description'));
    });
});
