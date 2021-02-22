import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/Auth";

import "./Header.css";

const Header = (props) => {
	const authContext = useContext(AuthContext);

	let navList = (
		<ul>
			<li>
				<NavLink exact to="/">
					Todo List
				</NavLink>
			</li>
			<li>
				<NavLink to="/info">
					Information
				</NavLink>
			</li>
			<li>
				<NavLink to="/auth">Login</NavLink>
			</li>
		</ul>
	);

	if (authContext.isAuth) {
		navList = (
			<ul>
				<li>
					<NavLink exact to="/">
						Todo List
					</NavLink>
				</li>
				<li>
					<NavLink to="/info">
						Information
					</NavLink>
				</li>
				<li>
					<NavLink to="/logout">Logout</NavLink>
				</li>
			</ul>
		);
	}

	return (
		<header>
			<nav>
				<div className="container">
					<div className="row">
						<div className="col">
							<NavLink to="/">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
									alt=""
								/>
							</NavLink>
						</div>
						<div className="col">{navList}</div>
						<div className="col">
							<div className="hamburger">
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
