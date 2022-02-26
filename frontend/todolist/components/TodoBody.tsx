import React from 'react'
import { styled } from '@mui/system'

type Props = {
	children: React.ReactNode
	title: string
}

const TodoBodyStyle = styled('div')`
	width: 512px;
	height: 768px;

	position: relative;
	background: white;
	border-radius: 15px;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

	margin: 0 auto;

	margin-top: 96px;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
`

const TodoTitle = styled('h2')`
	text-align: center;
	padding: 60px 0;
	margin-bottom: 30px;
	border-bottom: 1px solid #e9ecef;
`

const TodoBody: React.FC<Props> = ({ title, children }) => {
	return (
		<TodoBodyStyle>
			<TodoTitle>{title}</TodoTitle>
			{children}
		</TodoBodyStyle>
	)
}

export default TodoBody
