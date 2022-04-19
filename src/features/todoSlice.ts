import { createSlice } from '@reduxjs/toolkit'

interface TodoType {
    title: string,
    status: string
}

enum todoStatus{
    inProgress = "In progress",
    done = "Done"
}

const initialState: TodoType[] = [
    {
        title: "Todo 1",
        status: todoStatus.inProgress
    },
    {
        title: "Todo 2",
        status: todoStatus.inProgress
    },
    {
        title: "Todo 3",
        status: todoStatus.done
    },
    {
        title: "Todo 4",
        status: todoStatus.inProgress
    },
    {
        title: "Todo 5",
        status: todoStatus.done
    },
    {
        title: "Todo 6",
        status: todoStatus.done
    }
];

export const todoListSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                title: action.payload.title,
                status: todoStatus.inProgress,
            };
            state.push(newTodo);
        },

        updateTodo: (state, action) => {
            const index = action.payload.id;
            state[index].status === todoStatus.inProgress ? state[index].status = todoStatus.done : state[index].status = todoStatus.inProgress;
        },

        editTodo: (state, action) => {
            const index = action.payload.id;
            state[index].title = action.payload.title;
        },

        deleteTodo: (state, action) => {
            const index = action.payload.id;
            state.splice(index, 1);
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTodo, updateTodo, editTodo, deleteTodo} = todoListSlice.actions;

export default todoListSlice.reducer;