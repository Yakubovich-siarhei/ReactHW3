import React from 'react';
import ListItem from '../ItemList/ItemList';
import './todoList.css'

const TodoList = ({ todos, onDelete, onToggle, onImportants }) => {
	const elements = todos.map((item) => {
		const { id,  ...itemProps } = item;

		return (
			<li key={id} className='todoList'>
				<ListItem {...itemProps} onDelete={() => onDelete(id)} 
					onToggle={() => onToggle(id)}  
					onImportants={() => onImportants(id)}/>
			</li>
		);
	});

	return <ul className='list-group'>{elements}</ul>;
};

export default TodoList;
