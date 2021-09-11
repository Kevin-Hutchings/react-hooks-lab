import React from 'react';
import Todo from './Todo';

const List = (props) => {
    return (
        <div>
            {props.list.map((el, index) => {
                return <Todo item={el} key={index} />
            })}
        </div>
    )
}

export default List;