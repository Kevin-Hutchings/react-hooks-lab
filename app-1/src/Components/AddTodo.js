import React, { useState } from 'react';

const AddTodo = (props) => {
    const [userInput, setUserInput] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        props.addTodo(userInput);
        setUserInput('');
    }

    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input 
                placeholder='Add a Todo'
                value={userInput}
                onChange={handleInput}
            />
            <button> Submit </button>
        </form>
    )
}

export default AddTodo;