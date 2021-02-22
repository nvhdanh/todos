import TodoItem from './TodoItem/TodoItem'

const TodoItems = props => {
	let {todos} = props
	
	return(
		<div>
			<div>
				{todos.map(todo=><TodoItem key={todo.id} title={todo.title}/>)}
			</div>
		</div>
	)
}

export default TodoItems