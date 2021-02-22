import {useContext, useEffect} from 'react'

import {AuthContext} from '../../context/Auth'

const Logout = props => {
	const authContext = useContext(AuthContext)

	useEffect(()=>{
		authContext.logout()
	},[])

	return (
		<div>Logout nè</div>
	)
}

export default Logout