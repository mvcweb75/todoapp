import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import TodoCtxProvider from '../contexts/TodoCtxProvider'
import TodoHead from '../components/TodoHead'
import TodoDate from '../components/TodoDate'
import TodoInsert from '../components/TodoInsert'
import TodoEdit from '../components/TodoEdit'
import TodoBody from '../components/TodoBody'
import TodoList from '../components/TodoList'
import { useState } from 'react'
import TodoFooter from '../components/TodoFooter'

const TodoContainerBlock = styled.div`
	position: relative;
	max-width: 640px;
	margin: 0 auto;
	border: 1px solid #333;
	border-radius: 0 0 15px 15px;
`
const CreateGlobalStyle = createGlobalStyle`
    *{margin:0;padding:0;}
    ul,ol,li{list-style:none;}
    a:link,a:hover,a:visited,a:active{text-decoration:none;}
    body{color:#333;font-size:14px;}
    .sr-only{position:absolute;left:-9999px;}
  `

function TodoContainer(props) {
	//입력폼, 수정폼 선택변수
	const [selectForm, setSelectForm] = useState(true)
	const fnSelForm = bool => {
		setSelectForm(bool)
	}

	//수정할 항목 id 설정
	const [editId, setEditId] = useState(null)
	const fnEditId = id => setEditId(id)

	return (
		<TodoCtxProvider>
			<CreateGlobalStyle />
			<TodoContainerBlock>
				<TodoHead>
					<TodoDate />
					{selectForm ? <TodoInsert /> : <TodoEdit editId={editId} fnSelForm={fnSelForm} />}
				</TodoHead>
				<TodoBody>
					<TodoList fnSelForm={fnSelForm} fnEditId={fnEditId} />
				</TodoBody>
				<TodoFooter />
			</TodoContainerBlock>
		</TodoCtxProvider>
	)
}

export default TodoContainer
