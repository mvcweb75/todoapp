import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { useState } from 'react'
import { useCtxDispatch } from '../contexts/TodoCtxProvider'
import { sort } from '../reducers/todos'

const TodoFooterBlock = styled.footer`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 15px;
`

const Button = styled.button`
	background: none;
	outline: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	font-size: 14px;
	font-weight: 600;
	border: 1px solid #333;
	border-radius: 15px;
	cursor: pointer;
`

const BtnAll = styled(Button)`${props =>
	props.show === 'all' &&
	css`
  background-color:gold;
`}`

const BtnComplete = styled(Button)`${props =>
	props.show === 'complete' &&
	css`
  background-color:gold;
`}`

const BtnInComplete = styled(Button)`${props =>
	props.show === 'incomplete' &&
	css`
  background-color:gold;
`}`

function TodoFooter(props) {
	const [show, setShow] = useState('all')
	const dispatch = useContext(useCtxDispatch())

	return (
		<TodoFooterBlock>
			<BtnAll
				show={show}
				onClick={() => {
					setShow('all')
					dispatch(sort('all'))
				}}
			>
				전체보기
			</BtnAll>
			<BtnComplete
				show={show}
				onClick={() => {
					setShow('complete')
					dispatch(sort('complete'))
				}}
			>
				미션완료
			</BtnComplete>
			<BtnInComplete
				show={show}
				onClick={() => {
					setShow('incomplete')
					dispatch(sort('incomplete'))
				}}
			>
				아직미완
			</BtnInComplete>
		</TodoFooterBlock>
	)
}

export default TodoFooter
