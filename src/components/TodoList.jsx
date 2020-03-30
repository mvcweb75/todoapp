import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useCtxSate } from '../contexts/TodoCtxProvider'

const TodoListBlock = styled.ul``

function TodoList({ fnSelForm, fnEditId }) {
	const { todos, sort } = useContext(useCtxSate())
	let newTodos = null
	switch (sort) {
		case 'all':
			newTodos = todos
			break
		case 'complete':
			newTodos = todos.filter(todo => todo.done)
			break
		case 'incomplete':
			newTodos = todos.filter(todo => !todo.done)
			break
		default:
			return todos
	}
	return (
		<TodoListBlock>
			{newTodos.map(todo =>
				<TodoItem key={todo.id} todo={todo} fnSelForm={fnSelForm} fnEditId={fnEditId} />
			)}
		</TodoListBlock>
	)
}

export default TodoList
