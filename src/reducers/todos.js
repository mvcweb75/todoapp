import produce from 'immer'

//액션타입변수
const CREATE = 'todos/CREATE'
const REMOVE = 'todos/REMOVE'
const SORT = 'todos/SORT'
const EDIT = 'todos/EDIT'

//액션생성함수
export const create = (nextId, tit) => ({ type: CREATE, nextId, tit })
export const remove = id => ({ type: REMOVE, id })
export const sort = show => ({ type: SORT, show })
export const edit = (id, name, value) => ({ type: EDIT, id, name, value })

//초기값
export const initialState = {
	todos: [
		{
			id: 1,
			tit: '리액트 연습1',
			done: true
		},
		{
			id: 2,
			tit: '리액트 연습2',
			done: true
		},
		{
			id: 3,
			tit: '리액트 연습3',
			done: true
		},
		{
			id: 4,
			tit: '리액트 연습4',
			done: true
		},
		{
			id: 5,
			tit: '리액트 연습5',
			done: true
		},
		{
			id: 6,
			tit: '리액트 연습6',
			done: true
		},
		{
			id: 7,
			tit: '리액트 연습7',
			done: true
		}
	],
	sort: 'incomplete'
}

//리듀서
const reducer = (state, action) => {
	switch (action.type) {
		case CREATE:
			return produce(state, draft => {
				draft.todos.push({
					id: action.nextId,
					tit: action.tit,
					done: false
				})
			})

		case REMOVE:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id)
			}

		case SORT:
			console.log(action.show)
			return {
				...state,
				sort: action.show
			}

		case EDIT:
			return produce(state, draft => {
				const todo = draft.todos.find(todo => todo.id === action.id)
				todo[action.name] = action.value
			})

		default:
			throw new Error(`에러발생 - 해당하는 액션타입(${action.type})이 없습니다.`)
	}
}

export default reducer
