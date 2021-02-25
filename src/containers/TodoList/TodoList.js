import { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'

import TodoItems from '../../components/TodoItems/TodoItems'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
import FilterLimit from '../../components/FilterLimit/FilterLimit'

const TodoList = props => {
    const [todos, setTodos] = useState([])
    const [pagination, setPagination] = useState({})
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 8,
    })

    useEffect(() => {
    	let queryArr = []
    	for (let key in filters){
    		queryArr.push(`${key}=${filters[key]}`)
    	}
    	let queryString = queryArr.join('&')
        console.log('Chạy API lấy data')
        axios.get(`https://js-post-api.herokuapp.com/api/posts?${queryString}`)
            .then(res => {
                setTodos(res.data.data)
                setPagination(res.data.pagination)
            })
            .catch(err => console.log(err))
    }, [filters])

    const handlePageChange = useCallback((newPage) => {
        setFilters({
            ...filters,
            _page:newPage
        })
    },[])

    const handleSearchChange = useCallback((formValue) =>{
            setFilters({
            ...filters,
            _page:1,
            title_like:formValue
        })
    },[])

    const handleFilterLimitChange = (newLimit)=>{
        console.log(newLimit)
        setFilters({
            ...filters,
            _limit: newLimit
        })
    }

    return (
        <section className="container">
        	<Search onSearch = {handleSearchChange}/>
            <FilterLimit onFilterLimit = {handleFilterLimitChange} />
			<TodoItems todos={todos}/>
			<Pagination pagination={pagination} onPageChange={handlePageChange}/>
		</section>
    )
}

export default TodoList