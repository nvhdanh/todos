import {useState} from 'react'

import classes from './FilterLimit.module.css'

const FilterLimit = props =>{
	const {onFilterLimit} = props
	const [input, setInput] = useState('')

	const handleChange = (e)=>{
		setInput(e.target.value)
	}

	const handleClick = (e)=>{
		e.preventDefault()
		onFilterLimit(input)
	}

	return (
		<form className={classes.FilterLimit}>
			<input type="text" value={input} onChange={handleChange} placeholder="Limit Todos"/>
			<input type="submit" value="Set" onClick={handleClick}/>
		</form>
	)
}

export default FilterLimit