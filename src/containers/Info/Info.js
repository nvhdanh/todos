import {NavLink, Switch, Route, useRouteMatch} from 'react-router-dom'

import classes from "./Info.module.css"
import About from '../../components/InfoEl/About/About'
import Contact from '../../components/InfoEl/Contact/Contact'
import Privacy from '../../components/InfoEl/Privacy/Privacy'

const Info = props => {
	const match = useRouteMatch()
    console.log(About)
    return (
    	<div>
    		<ul className={classes.InfoNav}>
    			<li>
    				<NavLink activeClassName= {classes.active} to={match.path} exact>About</NavLink>
    			</li>
    			<li>
    				<NavLink activeClassName= {classes.active} to={match.path+"/contact"}>Contact</NavLink>
    			</li>
    			<li>
    				<NavLink activeClassName= {classes.active} to={match.path+"/privacy"}>Privacy</NavLink>
    			</li>
    		</ul>
    		<Switch>
                <Route path={match.path} exact>
                    <About/>
                </Route>
                <Route path={match.path+"/contact"}>
                    <Contact/>
                </Route>
                <Route path={match.path+"/privacy"}>
                    <Privacy/>
                </Route>
            </Switch>    		
    	</div>
    )
}

export default Info