import React from 'react'
import styled from 'styled-components'
import { MdAdd } from 'react-icons/md'

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

function TodoEdit(props) {
	return (
		<TodoEditBlock
			onSubmit={e => {
				e.preventDefault()
			}}
		>
			<InputBox />
			<BtnAdd>
				<MdAdd />
			</BtnAdd>
		</TodoEditBlock>
	)
}

export default TodoEdit
