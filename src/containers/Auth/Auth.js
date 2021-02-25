import {useContext} from 'react'
import {Redirect} from 'react-router-dom'

import {AuthContext} from '../../context/Auth'

import classes from './Auth.module.css'


const Auth = props => {
	const authContext = useContext(AuthContext)

	const handleAuthClick = (e)=>{
		e.preventDefault()
		authContext.login()
	}

	let authForm = (
		<form>
			<button onClick={handleAuthClick}>{authContext.isAuth?"Logout":"Login"}</button>
		</form>
	)
	
	if (authContext.isAuth) {

		authForm = <Redirect to="/"/>
	}

	return (
		<section className={classes.Auth}>
			{authForm}
		</section>
	)

}

export default Auth