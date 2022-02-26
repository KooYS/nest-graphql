import { GlobalStyles } from '@mui/material'
import TodoBody from '~/components/TodoBody'
import TodoList from '~/components/TodoList'

function MyApp() {
	return (
		<>
			<GlobalStyles styles={{ body: { backgroundColor: '#cdcdcd' } }} />
			<TodoBody title="Todo List">
				<TodoList />
			</TodoBody>
		</>
	)
}

export default MyApp
