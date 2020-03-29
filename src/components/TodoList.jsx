import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import TodoItem from './TodoItem'
import { useCtxSate } from '../contexts/TodoCtxProvider'

const TodoListBlock = styled.ul``

function TodoList({ fnSelForm }) {
	const { todos, sort } = useContext(useCtxSate())

	return (
		<TodoListBlock>
			{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
		</TodoListBlock>
	)
}

export default TodoList
