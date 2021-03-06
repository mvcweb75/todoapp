import React, { useReducer, useRef, createContext, useEffect } from 'react'
import reducer, { initialData } from '../reducers/todos'

const CtxState = createContext(null)
const CtxDispatch = createContext(null)
const CtxNextId = createContext(null)

export const useCtxState = () => {
	if (CtxState === null) return null
	return CtxState
}

export const useCtxDispatch = () => {
	if (CtxDispatch === null) return null
	return CtxDispatch
}

export const useCtxNextId = () => {
	if (CtxNextId === null) return null
	return CtxNextId
}

export const STORAGE_KEY = 'todo-store'
const defaultState = JSON.parse(localStorage[STORAGE_KEY] || JSON.stringify(initialData))

function TodoCtxProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, defaultState)
	const nextId = useRef(0)

	useEffect(
		() => {
			localStorage[STORAGE_KEY] = JSON.stringify(state)
		},
		[state]
	)

	return (
		<CtxState.Provider value={state}>
			<CtxDispatch.Provider value={dispatch}>
				<CtxNextId.Provider value={nextId}>
					{children}
				</CtxNextId.Provider>
			</CtxDispatch.Provider>
		</CtxState.Provider>
	)
}

export default React.memo(TodoCtxProvider)
