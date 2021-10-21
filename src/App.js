import Header from './components/Header'
import AdminCreate from './pages/AdminCreate'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import { Route, Switch, useHistory } from 'react-router-dom'
import Login from './pages/Auth/Login'
import { useSelector } from 'react-redux'
import React from 'react'

function App() {
	const history = useHistory()
	const { isAuth } = useSelector((state) => state.user)

	React.useEffect(() => {
		if (!isAuth) {
			history.push('/auth/login')
		}
	}, [isAuth])
	return (
		<div className='App'>
			{!isAuth ? (
				<Switch>
					<Route path='/auth/login' component={Login} />
					<Route path='/auth/sign-up' component={Signup} />
				</Switch>
			) : (
				<Switch>
					<Header />
					<Route exact path='/' component={Home} />
					<Route path='/create/restaraunt' component={AdminCreate} />
				</Switch>
			)}
		</div>
	)
}

export default App
