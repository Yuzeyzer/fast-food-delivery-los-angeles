import Header from './components/Header'
import AdminCreate from './pages/AdminCreate'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route path='/auth' component={Auth} />
			<Route path='/create/restaraunt' component={AdminCreate} />
		</div>
	)
}

export default App
