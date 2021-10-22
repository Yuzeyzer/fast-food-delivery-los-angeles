import Header from './components/Header'
import AdminCreate from './pages/AdminCreate'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import Login from './pages/Auth/Login'
import React from 'react'
import getUser from './hooks/getUser'

function App() {
	const history = useHistory()
	const { user } = getUser()

	React.useEffect(() => {
		if (!user) {
			history.push('/auth/login')
		}
	}, [user])

	return (
		<div className='App'>
			<Switch>
				<Route path='/auth/login' render={() => (user ? <Redirect to='/' /> : <Login />)} />
				<Route path='/auth/sign-up' render={() => (user ? <Redirect to='/' /> : <Signup />)} />
			</Switch>
			{user && (
				<>
					<Header />
					<Route exact path='/' component={Home} />
					<Route path='/create/restaraunt' component={AdminCreate} />
				</>
			)}
		</div>
	)
}

export default App
