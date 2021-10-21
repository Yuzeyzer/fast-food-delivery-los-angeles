import Header from './components/Header'
import AdminCreate from './pages/AdminCreate'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import { Route } from 'react-router-dom'
import Login from './pages/Auth/Login'

function App() {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route path='/auth/login' component={Login} />
			<Route path='/auth/sign-up' component={Signup} />
			<Route path='/create/restaraunt' component={AdminCreate} />
		</div>
	)
}

export default App
