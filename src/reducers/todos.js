import produce from 'immer'

//액션타입변수
const CREATE = 'todos/CREATE'
const REMOVE = 'todos/REMOVE'
const FINISH = 'todos/FINISH'
const SORT = 'todos/SORT'
const EDIT = 'todos/EDIT'

//액션생성함수
export const create = (tit, nextId) => ({ type: CREATE, tit, nextId })
export const remove = id => ({ type: REMOVE, id })
export const finish = id => ({ type: FINISH, id })
export const sort = show => ({ type: SORT, show })
export const edit = (id, tit) => ({ type: EDIT, id, tit })

//초기값
export const initialState = {
	todos: [
		{
			id: 0,
			tit: '리액트 연습',
			done: true,
			nextCommentIdx: 2,
			comment: [{ idx: 0, cont: '코멘트-1' }, { idx: 1, cont: '코멘트-2' }]
		},
		{
			id: 1,
			tit: '리액트 프로젝트',
			done: false,
			nextCommentIdx: 2,
			comment: [{ idx: 0, cont: '투두-1' }, { idx: 1, cont: '투두-2' }]
		}
	],
	sort: 'all'
}

//리듀서
const reducer = (state, action) => {
	console.log(state)
	switch (action.type) {
		case CREATE:
			return {
				...state,
				todos: state.todos.concat({
					id: action.nextId,
					tit: action.tit,
					done: false,
					nextCommentIdx: 0,
					comment: []
				})
			}

		case REMOVE:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id)
			}

		case FINISH:
			return {
				...state,
				todos: state.todos.map(
					todo =>
						todo.id === action.id
							? {
									...todo,
									done: !todo.done
								}
							: todo
				)
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
				todo.tit = action.tit
			})

		default:
			throw new Error(`에러발생 - 해당하는 액션타입(${action.type})이 없습니다.`)
	}
}

export default reducer
