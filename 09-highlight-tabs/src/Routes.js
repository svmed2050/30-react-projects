import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './pages/About'
import Features from './pages/Features'
import Home from './pages/Home'

const Routes = () => {
	return (
		<Switch>
			<Route path='/about'>
				<About />
			</Route>
			<Route path='/features'>
				<Features />
			</Route>
			<Route exact={true} path='/'>
				<Home />
			</Route>
		</Switch>
	)
}

export default Routes
