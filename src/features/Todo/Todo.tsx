import './Todo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, editTodo, deleteTodo } from '../todoSlice';

interface todoProp{
    id: number,
    title: string,
    status: string
}

function Todo(todo: todoProp){
    const [editedTodo, setEditedTodo] = useState('');
    const [isEditDisplay, setIsEditDisplay] = useState(true);
    const [editTodoId, setEditTodoId] = useState(0);
    const dispatch = useDispatch();

    const getEditedTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTodo(event.target.value);
    }

    const displayEditTodo = (todoId: number) => {
        setEditTodoId(todoId)
        setIsEditDisplay(false);
    }

    const cancelEditTodo = () => {
        setIsEditDisplay(true);
    }

    const submitUpdateTodo = (todoId: number) => {
        dispatch(
            updateTodo({id: todoId})
        );
    }

    const submitEditTodo = (todoId: number) => {
        dispatch(
            editTodo({
                id: todoId,
                title: editedTodo
            })
        );
        cancelEditTodo();
    }

    const submitDeleteTodo = (todoId: number) => {
        dispatch(
            deleteTodo({id: todoId})
        );
    }

    return (
        <tr>
            <td className='todo-id'>{todo.id + 1}</td>
            <td className='todo-title'>
                {(editTodoId === todo.id) ?
                    (isEditDisplay) ? <p>{todo.title}</p> : <input defaultValue={todo.title} onChange={getEditedTodoTitle}></input>
                    :
                    <p>{todo.title}</p>
                }
            </td>
            <td className='todo-status'>{todo.status}</td>
            <td className='todo-action'>
                {(editTodoId === todo.id) ?
                    (isEditDisplay) ? 
                        <div>
                            <button className='update-btn' onClick={() => {submitUpdateTodo(todo.id)}}>Update</button>
                            <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                            <button className='delete-btn' onClick={() => {submitDeleteTodo(todo.id)}}>Delete</button>
                        </div>
                        :
                        <div className='edit-todo-action'>
                            <button className='update-edit-btn' onClick={() => {submitEditTodo(todo.id)}}>OK</button>
                            <button className='cancel-edit-btn' onClick={cancelEditTodo}>Cancel</button>
                        </div>
                    :
                    <div>
                        <button className='update-btn' onClick={() => {submitUpdateTodo(todo.id)}}>Update</button>
                        <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                        <button className='delete-btn' onClick={() => {submitDeleteTodo(todo.id)}}>Delete</button>
                    </div>
                }
            </td>
        </tr>
    );
}

export default Todo;