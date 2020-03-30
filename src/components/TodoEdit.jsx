import React from 'react'
import styled from 'styled-components'
import { MdAdd } from 'react-icons/md'
import { useContext } from 'react'
import { useCtxState, useCtxDispatch } from '../contexts/TodoCtxProvider'
import useInputs from '../custom_hooks/useInputs'
import { edit } from '../reducers/todos'

const TodoEditBlock = styled.form`
	position: relative;
	padding: 15px;
	display: flex;
`

const InputBox = styled.input`
	border: none;
	outline: none;
	background: none;
	flex: 1;
	height: 30px;
	padding: 0 15px;
	font-size: 12px;
	background-color: #fff;
	border-radius: 15px;
	box-sizing: border-box;
`

const BtnAdd = styled.button`
	border: none;
	outline: none;
	background: none;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 18px;
	top: 18px;
	width: 24px;
	height: 24px;
	color: #fff;
	font-size: 20px;
	background-color: pink;
	border-radius: 50%;
	cursor: pointer;
`

function TodoEdit({ editId, fnChoice }) {
	const state = useContext(useCtxState())
	const dispatch = useContext(useCtxDispatch())
	const todo = state.todos.filter(todo => todo.id === editId)[0]

	const { text: tit, fnChange, fnReset } = useInputs(todo.tit)

	return (
		<TodoEditBlock
			onSubmit={e => {
				e.preventDefault()
				dispatch(edit(editId, 'tit', tit))
				fnChoice(true)
				fnReset()
			}}
		>
			<InputBox value={tit} onChange={fnChange} autoFocus />
			<BtnAdd>
				<MdAdd />
			</BtnAdd>
		</TodoEditBlock>
	)
}

export default React.memo(TodoEdit)
