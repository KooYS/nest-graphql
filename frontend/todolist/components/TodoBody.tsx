import React from 'react'
import { styled } from '@mui/system'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

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
	margin-bottom: 0px;
	border-bottom: 1px solid #e9ecef;
`

const TodoStatus = styled('ul')`
	list-style-type: none;
	display: flex;
	gap: 20px;
	margin-right: 20px;
	justify-content: flex-end;

	& li {
		display: flex;
		align-items: flex-end;
	}

	& em {
		font-size: 19px;
		margin-left: 2px;
	}

	& .done {
		color: #d50000;
	}

	& .ing {
		color: #388e3c;
	}
`

const TodoBody: React.FC<Props> = ({ title, children }) => {
	return (
		<TodoBodyStyle>
			<TodoTitle>{title}</TodoTitle>
			<TodoStatus>
				<li className="ing">
					<CircleOutlinedIcon />
					<em>{2}</em>
				</li>
				<li className="done">
					<CheckCircleOutlineRoundedIcon />
					<em>{5}</em>
				</li>
			</TodoStatus>
			{children}
		</TodoBodyStyle>
	)
}

export default TodoBody
