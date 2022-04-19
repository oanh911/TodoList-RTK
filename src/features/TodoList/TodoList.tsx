import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import './TodoList.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";

interface TodoType{
    title: string,
    status: string
}

function TodoList(){
    const todoList: TodoType[] = useSelector((state: RootState) => {
        return state.todos;
    });

    return (
        <div>
            <AddTodo />

            <table className='todolist'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todo: TodoType, index: number) => {
                    return <Todo key={index} id={index} title={todo.title} status={todo.status}/>;
                })}
            </tbody>
            </table>
        </div>
    );
}

export default TodoList;