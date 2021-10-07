import React from 'react'
import { useDispatch } from 'react-redux'
import { getfilteredProducts } from './actions'

const Item = ({ icon, type, active, index, setActive }) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		setActive(index)
		dispatch(getfilteredProducts(type))
	}

	return (
		<li onClick={handleClick} className={`categories__item ${active === index ? 'active' : ''}`}>
			<img src={icon} alt={type} />
			<span>{type}</span>
		</li>
	)
}

export default Item
