import React from 'react';
import TodoList from './todo-list';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };

    return <span style={style}>{ label }</span>;
};

export default TodoListItem;