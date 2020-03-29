import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useCtxSate } from '../contexts/TodoCtxProvider'
import { useContext } from 'react'
import { useMemo } from 'react'

const TodoDateBlock = styled.div`
	display: flex;
	height: 70px;
	background-color: pink;
`

const ToDate = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	font-size: 48px;
`

const Today = styled.p`flex: 1;`
const Year = styled.span`
	display: block;
	margin-top: 16px;
	font-size: 16px;
`
const MonthTimeBlock = styled.span`
	display: flex;
	margin-top: 2px;
`
const Month = styled.span`font-weight: 600;`
const Time = styled.time`
	display: flex;
	justify-content: space-between;
	width: 80px;
	margin-left: 20px;
`

const Ampm = styled.span`display: block;`

const TodoLen = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	font-size: 30px;
	text-align: right;
`
// 할일 개수 함수
const fnTodoLen = (todos, sort) => {
	if (sort === 'all') {
		return todos.length
	} else if (sort === 'complete') {
		return todos.filter(todo => todo.done).length
	} else if (sort === 'incomplete') {
		return todos.filter(todo => !todo.done).length
	}
}

function TodoDate(props) {
	const today = new Date()
	const date = today.getDate()
	const year = today.toLocaleDateString('ko-kr', { year: 'numeric' })
	const month = today.toLocaleDateString('ko-kr', { month: 'long' })

	const [ampm, setAmpm] = useState(today.getHours() >= 12 ? 'PM' : 'AM')

	const fnZero = useCallback(sec => {
		return ('00' + sec).substr(-2, 2)
	}, [])

	const [time, setTime] = useState({
		hour: fnZero(ampm === 'AM' ? today.getHours() : today.getHours() - 12),
		min: fnZero(today.getMinutes()),
		sec: fnZero(today.getSeconds())
	})

	useEffect(
		() => {
			setTimeout(() => {
				const now = new Date()
				now.getHours() >= 12 ? setAmpm('PM') : setAmpm('AM')

				setTime({
					...time,
					hour: fnZero(ampm === 'AM' ? now.getHours() : now.getHours() - 12),
					min: fnZero(now.getMinutes()),
					sec: fnZero(now.getSeconds())
				})
			}, 1000)
		},
		[fnZero, ampm, time]
	)

	// 할일 개수
	const state = useContext(useCtxSate())
	let todoLen = useMemo(() => fnTodoLen(state.todos, state.sort), [state])

	return (
		<TodoDateBlock>
			<ToDate>
				{date}
				<span className="sr-only">일 할일</span>
			</ToDate>
			<Today>
				<Year>
					{year}
				</Year>
				<MonthTimeBlock>
					<Month>
						{month}
					</Month>
					<Time>
						{time.hour}:{time.min}:{time.sec} <Ampm>{ampm}</Ampm>
					</Time>
				</MonthTimeBlock>
			</Today>
			<TodoLen>
				모두 {todoLen}개
			</TodoLen>
		</TodoDateBlock>
	)
}

export default TodoDate
