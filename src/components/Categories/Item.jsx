import React from 'react'

const Item = ({ icon, type, active, index, setActive }) => {
	return (
		<li
			onClick={() => setActive(index)}
			className={`categories__item ${active === index ? 'active' : ''}`}>
			<img src={icon} alt={type} />
			<span>{type}</span>
		</li>
	)
}

export default Item
