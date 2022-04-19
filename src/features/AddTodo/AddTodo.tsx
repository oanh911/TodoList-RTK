import './AddTodo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

function AddTodo(){
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
    
    const getNewTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }

    const submitAddTodo = () => {
        if (newTodo){
            dispatch(
                addTodo({title: newTodo})
            );
        }
        setNewTodo('');
    }

    return (
        <div className="add-todo">
            <input placeholder="Enter title" value={newTodo} onChange={getNewTodoTitle}></input>
            <button onClick={submitAddTodo}>Add</button>
        </div>
    );
}

export default AddTodo;