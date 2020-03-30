import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useCtxState } from '../contexts/TodoCtxProvider'

const TodoListBlock = styled.ul`
	overflow-y: scroll;
	position: absolute;
	right: -17px;
	height: calc(100% - 210px);
	width: calc(100% + 17px);
`

function TodoList({ fnChoice, fnEditId }) {
	const { todos, sort } = useContext(useCtxState())
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
				<TodoItem key={todo.id} todo={todo} fnChoice={fnChoice} fnEditId={fnEditId} />
			)}
		</TodoListBlock>
	)
}

export default TodoList
