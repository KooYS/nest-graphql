import React from 'react'
import { styled } from '@mui/system'

type Props = {
	children: React.ReactNode
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

const TodoBody: React.FC<Props> = ({ children }) => {
	return <TodoBodyStyle>{children}</TodoBodyStyle>
}

export default TodoBody
