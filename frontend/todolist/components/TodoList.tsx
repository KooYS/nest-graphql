import React from 'react'
import { styled } from '@mui/system'
import TodoItem from './TodoItem'

const TodoListStyle = styled('div')`
	flex: 1;
`

const TodoList = () => {
	return (
		<TodoListStyle>
			<TodoItem status="done">밥 먹기</TodoItem>
			<TodoItem status="ing">숙제하기</TodoItem>
		</TodoListStyle>
	)
}

export default TodoList
