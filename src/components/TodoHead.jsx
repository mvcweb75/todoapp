import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	flex-direction: column;
	background-color: gold;
`
function TodoHead({ children }) {
	return (
		<Header>
			{children}
		</Header>
	)
}

export default React.memo(TodoHead)
