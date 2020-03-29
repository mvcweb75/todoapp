import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { MdAdd } from 'react-icons/md'
import useInputs from '../custom_hooks/useInputs'
import { create } from '../reducers/todos'
import { useCtxDispatch, useCtxNextId } from '../contexts/TodoCtxProvider'

const TodoInsertBlock = styled.form`
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
	background-color: gold;
	border-radius: 50%;
	cursor: pointer;
`

function TodoInsert(props) {
	const { inputs, fnChange, fnReset } = useInputs('')
	const $input = useRef()
	const dispatch = useContext(useCtxDispatch())
	const nextId = useContext(useCtxNextId())
	return (
		<TodoInsertBlock
			onSubmit={e => {
				e.preventDefault()
				dispatch(create(inputs, nextId.current++))
				fnReset()
				$input.current.focus()
			}}
		>
			<InputBox ref={$input} value={inputs} onChange={fnChange} />
			<BtnAdd>
				<MdAdd />
			</BtnAdd>
		</TodoInsertBlock>
	)
}

export default TodoInsert
