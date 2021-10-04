import React from 'react';
import Item from './Item';
import './style.scss';

const Nav = () => {
	const navItems = ['Restaurants', 'Cuisines', 'Delivery', 'Contacts']

	return (
		<nav className="nav">
			<ul className="nav__list">
				{navItems.map((text) => (
					<Item text={text} />
				))}
			</ul>
		</nav>
	)
}

export default Nav
