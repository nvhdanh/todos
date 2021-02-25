import React, { useState, useRef } from 'react'

import classes from './Search.module.css'

const Search = props => {
    const { onSearch } = props
    const [formValue, setFormValue] = useState('')
    const timeoutRef = useRef(null)

    const handleFormChange = (e) => {
        setFormValue(e.target.value)
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            onSearch(e.target.value)
        }, 300)
    }

    return (
        <form className={classes.Search}>
    		<input type="text" value={formValue} onChange={handleFormChange} placeholder="Search"/>
    	</form>
    )
}

export default React.memo(Search)