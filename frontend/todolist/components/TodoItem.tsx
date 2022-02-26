import React from 'react'
import { styled } from '@mui/system'
import Checkbox from '@mui/material/Checkbox'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { red, green, grey } from '@mui/material/colors'

type Props = {
	children: React.ReactNode
	status: 'done' | 'ing'
}

const TodoItemStyle = styled('div')`
	font-size: 20px;
	display: flex;
	align-items: center;
`

const Remove = styled(IconButton)`
	order: 2;
	margin-left: auto;
	margin-right: 5px;
`

const TodoItemText = styled('div')`
	color: #cdcdcd;
	text-decoration: line-through;
`

const TodoItem: React.FC<Props> = ({ status, children }) => {
	return (
		<TodoItemStyle>
			<Checkbox
				icon={<CircleOutlinedIcon />}
				checked={status === 'done' ? true : false}
				checkedIcon={<CheckCircleOutlineRoundedIcon />}
				sx={{
					'& .MuiSvgIcon-root': { fontSize: 35 },
					color: green[700],
					'&.Mui-checked': {
						color: red['A700'],
					},
				}}
			/>
			<TodoItemText
				sx={{
					color: status === 'done' ? grey[400] : 'black',
					textDecoration: status === 'done' ? 'line-through' : 'none',
				}}>
				{children}
			</TodoItemText>
			<Remove aria-label="delete">
				<DeleteIcon />
			</Remove>
		</TodoItemStyle>
	)
}

export default TodoItem
