import React from 'react'
import styled from 'styled-components'

const TodoBodyBlock = styled.section`height: 100%;`

function TodoBody({ children }) {
	return (
		<TodoBodyBlock>
			{children}
		</TodoBodyBlock>
	)
}

export default TodoBody
