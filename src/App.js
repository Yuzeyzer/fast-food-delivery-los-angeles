import React from 'react'
import Header from '@components/Header'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import { Route } from 'react-router-dom'
import './store/store'

function App() {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route exact path='/create' component={CreateProduct} />
		</div>
	)
}

export default App
