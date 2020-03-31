import { useState, useEffect, useCallback } from 'react'

function useInputs(initialData) {
	const [text, setText] = useState('')
	const fnChange = useCallback(e => setText(e.target.value), [])
	const fnReset = useCallback(() => setText(initialData), [initialData])

	useEffect(
		() => {
			//setState가 실행되는 시점이 비동기이기 때문에 이 시점에 해줘야 데이터가 확실하게 주입됨
			setText(initialData)
		},
		[initialData]
	)

	return { text, fnChange, fnReset }
}

export default useInputs
