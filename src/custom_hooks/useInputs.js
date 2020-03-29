import { useState } from 'react'

function useInputs(initialData) {
	const [inputs, setInputs] = useState(initialData)

	const fnChange = e => setInputs(e.target.value)
	const fnReset = () => setInputs(initialData)

	return { inputs, fnChange, fnReset }
}

export default useInputs
