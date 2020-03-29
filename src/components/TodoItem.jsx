import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdBuild, MdDelete } from 'react-icons/md'
import { finish, remove } from '../reducers/todos'
import { useCtxDispatch } from '../contexts/TodoCtxProvider'

const TodoItemBlock = styled.li`
	display: flex;
	height: 70px;
	align-items: center;
	border-bottom: 1px solid #555;
`
const Span = styled.span`
	display: flex;
	justify-content: center;
	align-items: stretch;
	width: 50px;
	font-size: 25px;
	cursor: pointer;

	&:hover {
		color: #345343;
	}
`
const ChkBox = styled(Span)``

const Title = styled.h3`
	flex: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`
const Edit = styled(Span)`width:40px;font-size:20px;`
const Delete = styled(Span)`width:40px;font-size:20px;`

function TodoItem({ todo }) {
	const { id, tit, done } = todo

	const dispatch = useContext(useCtxDispatch())

	return (
		<TodoItemBlock>
			<ChkBox onClick={() => dispatch(finish(id))}>
				{done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
			</ChkBox>
			<Title>
				{tit}
			</Title>
			<Edit>
				<MdBuild />
			</Edit>
			<Delete onClick={() => dispatch(remove(id))}>
				<MdDelete />
			</Delete>
		</TodoItemBlock>
	)
}

export default TodoItem
