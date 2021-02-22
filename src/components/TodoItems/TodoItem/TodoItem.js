import classes from './TodoItem.module.css'

const TodoItem = props =>{
	let {title} = props

	return (
		<div className={classes.TodoItem}>{title}</div>
	)
}
export default TodoItem