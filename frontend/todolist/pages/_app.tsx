import { GlobalStyles } from '@mui/material'
import TodoBody from '../components/TodoBody'

function MyApp() {
	return (
		<>
			<GlobalStyles styles={{ body: { backgroundColor: '#cdcdcd' } }} />
			<TodoBody>TODO BODY</TodoBody>
		</>
	)
}

export default MyApp
