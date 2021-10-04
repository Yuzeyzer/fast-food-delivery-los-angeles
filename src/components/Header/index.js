import React from 'react'
import Nav from './Nav'
import './style.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<a href='' className='logo'>
					Constructor
				</a>
				<div className="header__nav">
					<Nav />
				</div>
			</div>
		</header>
	)
}

export default Header
