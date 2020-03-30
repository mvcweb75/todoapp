import React, { useState, useCallback } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import TodoCtxProvider from '../contexts/TodoCtxProvider'
import TodoHead from '../components/TodoHead'
import TodoDate from '../components/TodoDate'
import TodoInsert from '../components/TodoInsert'
import TodoEdit from '../components/TodoEdit'
import TodoBody from '../components/TodoBody'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'
import { useEffect } from 'react'

const CreateGlobalStyle = createGlobalStyle`
    *{margin:0;padding:0;}
    ul,ol,li{list-style:none;}
    a:link,a:hover,a:visited,a:active{text-decoration:none;}
    body{color:#333;font-size:14px;}
    .sr-only{position:absolute;left:-9999px;}
  `

const TodoContainerBlock = styled.div`
	overflow: hidden;
	position: relative;
	max-width: 640px;
	margin: 0 auto;
	border-radius: 0 0 15px 15px;
	${props =>
		props.height &&
		css`
		height:${props.height}px
	`};
`

function TodoContainer(props) {
	//입력폼(true), 수정폼(false) 선택변수
	const [choice, setChoice] = useState(true)
	const fnChoice = useCallback(bool => {
		setChoice(bool)
	}, [])

	//수정할 항목 id 설정
	const [editId, setEditId] = useState(null)
	const fnEditId = useCallback(id => setEditId(id), [])

	const [height, setHeight] = useState()

	useEffect(() => {
		setHeight(window.innerHeight) //브라우저 화면의 높이
	}, [])

	return (
		<TodoCtxProvider>
			<CreateGlobalStyle />
			<TodoContainerBlock height={height}>
				<TodoHead>
					<TodoDate />
					{choice ? <TodoInsert /> : <TodoEdit editId={editId} fnChoice={fnChoice} />}
				</TodoHead>
				<TodoBody>
					<TodoList fnChoice={fnChoice} fnEditId={fnEditId} />
				</TodoBody>
				<TodoFooter />
			</TodoContainerBlock>
		</TodoCtxProvider>
	)
}

export default React.memo(TodoContainer)
