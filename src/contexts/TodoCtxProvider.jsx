import React, { useReducer, useRef, createContext } from 'react'
import reducer, { initialState } from '../reducers/todos'

const CtxState = createContext(null)
const CtxDispatch = createContext(null)
const CtxNextId = createContext(null)

export const useCtxSate = () => {
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

function TodoCtxProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const nextId = useRef(2)
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

export default TodoCtxProvider
